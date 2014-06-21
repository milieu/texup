$.expr[':'].innerHTMLExactlyEquals = function(currDomObj, idx, meta, stack) {
    return ($(currDomObj).context.innerHTML === meta[3]);
};

function interleave(X, arrOfArrs) {
    var expected = X * arrOfArrs.length;
    var sumArrLens = arrOfArrs.reduce(function(prev, curr, idx, arr) {
        return prev + curr.length;
    }, 0);
    var result = [];
    while (result.length < expected && result.length < sumArrLens) {
        arrOfArrs.forEach(function(val, idx, arr) {
            var toPush = val.shift();
            if (toPush !== undefined) {
                result.push(toPush);
            }
        });
    }
    return result;
}


$(document).ready(function() {
    console.log('External JS file loaded');

    $('.language').detach();


    $('section.code').each(function(idx, el) {

        var relatedStories = $(el).closest('section.resource').children('article.details').children('div.storytime').detach();

        var numLangs = 12;
        var totalNumExamples = 0;
        relatedStories.each(function(idx, val) {
            var span = parseInt(val.getAttribute("span"));
            totalNumExamples += (isNaN(span) ? 1 : span);
        });

        // one request section per example, & responses aren't regenerated by apiary
        var numberOfExamplesXLanguagesThatShouldBeLoaded = numLangs * totalNumExamples;
        var counter = 0;

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {

                if (++counter === numberOfExamplesXLanguagesThatShouldBeLoaded) {
                    // when request and response html is added to the resource,
                    // select and detach  all the stories in the resource
                    // select and detach  all the requests ""
                    // select and detach  all the responses ""
                    var me = $(mutation.addedNodes[0]).closest('section.resource');
                    var allRequests = me.find('.highlighted[name=raw]').detach();
                    var requestArr = $.makeArray(allRequests);
                    var outputs = me.find('p.ioDesc:innerHTMLExactlyEquals(Response)').detach();
                    var responseTextArr = $.makeArray(outputs);
                    var outputJson = me.find('section.outgoingCall').detach();
                    var responseJsonArr = $.makeArray(outputJson);

                    var toActuallyInsert = []
                    relatedStories.each(function(idx, storyDiv) {
                        toActuallyInsert.push(storyDiv);
                        var span = parseInt(storyDiv.getAttribute("span"));
                        var howManyToInterleave = ((isNaN(span) || span < 1) ? 1 : span);
                        var toInterleave = [requestArr, responseTextArr, responseJsonArr];
                        var toConcat = interleave(howManyToInterleave, toInterleave);
                        toActuallyInsert = toActuallyInsert.concat(toConcat);
                    });
                    me.find('section.code').append(toActuallyInsert);
                }
            });
        });

        observer.observe(el, {
            childList: true,
            subtree: false,
            attributes: false,
            characterData: false
        });

    });

});