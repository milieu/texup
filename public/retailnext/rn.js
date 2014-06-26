$(document).ready(function () {
    console.log('External JS file loaded');

    $('#endpoints').remove();
    
    function setupSliding(linkHashes, sectionHash, theHash, hideSectionHash, otherHash) {
        var section = $(sectionHash);

        linkHashes.forEach( function(val,idx,arr) {
            $(val).click(function (e) {
                section.slideDown();
                this.href = theHash;
            });
        });
        /*
        $(hideSectionHash).click(function (e) {
            location.hash = otherHash;
            section.slideUp();
        });
        */
    }

    // Things to add to ToC
    var moreToC = [
        "<li><a href=\"#overview\">Overview</a></li>",
        "<li><a href=\"#query\">Query</a></li>",
        "<div id=\"toc_measures\">",
        "<li class=\"subToC\"><a href=\"#measures\">Measures</a></li>",
        "<li class=\"subsubToC\"><a href=\"#trafficexposure\">Traffic / Exposure</a></li>",
        "<li class=\"subsubToC\"><a href=\"#engagement\">Engagement</a></li>",
        "<li class=\"subsubToC\"><a href=\"#conversion\">Conversion</a></li>",
        "<li class=\"subsubToC\"><a href=\"#sales\">Sales</a></li>",
        "<li class=\"subsubToC\"><a href=\"#shopperbase\">ShopperBase</a></li>",
        "<li class=\"subsubToC\"><a href=\"#staffing\">Staffing</a></li>",
        "<li class=\"subsubToC\"><a href=\"#queue\">Queue</a></li>",
        "<li class=\"subsubToC\"><a href=\"#other\">Other</a></li>",
        "<li class=\"subToC\"><a href=\"#groupings\">Groupings</a></li>",
        "<li class=\"subToC\"><a href=\"#date_ranges\">Date Ranges</a></li>",
        "<li class=\"subToC\"><a href=\"#time_ranges\">Time Ranges</a></li>",
        "</div>",
        "<li><a href=\"#locations\">Locations</a></li>",
        "<li><a href=\"#ages\">Age Ranges</a></li>"
    ];
    $('#toc').children().remove();    
    $('#toc').prepend(moreToC.join(""));
    
    var toc_m = $('#toc_measures');
    /*/ for animating ToC    
    var subsubToC = $('.subsubToC');
    subsubToC.hide();
    toc_m.on('mouseenter', function(e) {
        subsubToC.slideDown();
    });
    toc_m.on('mouseleave', function(e) {
        subsubToC.slideUp();
    }); //  */
    
    /*/ for ToC#Measures revealing #measures
    toc_m.on('click', function(e) {        
        toc_m.unbind('mouseleave');
        $('#measures').slideDown("slow");
    }); // */ 
    
    // remove #toc setup html
    $('.chapterWrapper').last().remove();

    /*/ for parameter links revealing #measures
    var queryHash = "#query";
    setupSliding(['.a_measures'   ], '#measures'   , '#measures'   , '#ah_measures'   , queryHash);
    setupSliding(['.a_groupings'  ], '#groupings'  , '#groupings'  , '#ah_groupings'  , queryHash);
    setupSliding(['.a_date_ranges'], '#date_ranges', '#date_ranges', '#ah_date_ranges', queryHash);
    setupSliding(['.a_time_ranges'], '#time_ranges', '#time_ranges', '#ah_time_ranges', queryHash);

/*
    $('.my-affix').affix({
        offset: {
            top: 100,
            bottom: function () {
                return (this.bottom = $('#fake_footer').outerHeight(true))
            }
        }
    });
*/

});
