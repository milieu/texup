$(document).ready(function () {
    console.log('External JS file loaded');

    $('#endpoints').remove();
    
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
    
    // remove #toc setup html
    $('.chapterWrapper').last().remove();


});
