$(document).ready(function () {
    console.log('External JS file loaded');

    
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

    var queryHash = '#get-%2Fquery%3Fapi_key%3D%7Bapi_key%7D%26row_limit%3D%7Brow_limit%7D%26calendar_type%3D%7Bcalendar_type%7D%26location_ids%3D%7Blocation_ids%7D%26measures%3D%7Bmeasures%7D%26groupings%3D%7Bgroupings%7D%26date_ranges%3D%7Bdate_ranges%7D%26time_ranges%3D%7Btime_ranges%7D';
    var locHash = "#get-%2Flocations%3Fapi_key%3D%7Bapi_key%7D%26id%3D%7Bid%7D%26name%3D%7Bname%7D%26type%3D%7Btype%7D%26description%3D%7Bdescription%7D";
    var ageHash = "#get-%2Fage%3Fapi_key%3D%7Bapi_key%7D";

    // Things to add to ToC
    var moreToC = [
        "<li><a href=\"" + queryHash + "\">Query</a></li>",
        "<div id=\"toc_measures\">",
        "<li class=\"subToC\"><a class=\"a_measures\">Measures</a></li>",
        "<li class=\"subsubToC\"><a href=\"#trafficexposure\">Traffic / Exposure</a></li>",
        "<li class=\"subsubToC\"><a href=\"#engagement\">Engagement</a></li>",
        "<li class=\"subsubToC\"><a href=\"#conversion\">Conversion</a></li>",
        "<li class=\"subsubToC\"><a href=\"#sales\">Sales</a></li>",
        "<li class=\"subsubToC\"><a href=\"#shopperbase\">ShopperBase</a></li>",
        "<li class=\"subsubToC\"><a href=\"#staffing\">Staffing</a></li>",
        "<li class=\"subsubToC\"><a href=\"#queue\">Queue</a></li>",
        "<li class=\"subsubToC\"><a href=\"#other\">Other</a></li>",
        "<li class=\"subToC\"><a class=\"a_groupings\">Groupings</a></li>",
        "<li class=\"subToC\"><a class=\"a_date_ranges\">Date Ranges</a></li>",
        "<li class=\"subToC\"><a class=\"a_time_ranges\">Time Ranges</a></li>",
        "</div>",
        "<li><a href=\"" + ageHash + "\">Age Ranges</a></li>",
        "<li><a href=\"" + locHash + "\">Locations</a></li>"
    ];
    $('#toc').prepend(moreToC.join(""));
    
    // for animating ToC    
    var subsubToC = $('.subsubToC');
    var toc_m = $('#toc_measures');
    subsubToC.hide();
    toc_m.on('mouseenter', function(e) {
        subsubToC.slideDown();
    });
    toc_m.on('mouseleave', function(e) {
        subsubToC.slideUp();
    });
    
    // for ToC#Measures revealing #measures
    toc_m.on('click', function(e) {        
        toc_m.unbind('mouseleave');
        $('#measures').slideDown("slow", function(anything) {
            location.href = location.href;
        });
    });
    
    // for parameter links revealing #measures
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
