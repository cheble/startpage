
// Search commands
var searchCommands = [
    ["!g",        "https://www.google.com/#q={Q}",                          "Google"],
    ["!im",       "https://www.google.com/search?tbm=isch&q={Q}",           "Google Images"],
    ["!yt",       "https://www.youtube.com/results?search_query={Q}",       "YouTube"],
    ["!gd",       "https://drive.google.com/drive/search?q={Q}",            "Google Drive"],
    ["!a",        "https://www.amazon.com/s/keywords={Q}",                  "Amazon"],
    ["!sd",       "https://slickdeals.net/newsearch.php?q={Q}",             "Slickdeals"]
];

function handleQuery(event, value) { // Handle search query
    var key=event.keyCode || event.which;
    if (key==13) { // Enter
        value = value.trim();

        var y=value.indexOf(" ");
        var sci = 0; // "!i" where not specified, use default
        if (y!=-1 && value.indexOf("!")) {
            for(var i=0;i<searchCommands.length;i++) {
                if(searchCommands[i][0]==value.substring(0,y)) { // Find "!i*"
                    sci = i;
                    value = value.substring(y+1);
                    break;
                }
            }
        }

        // run search query
        window.location = searchCommands[sci][1].replace("{Q}", encodeURIComponent(value));
    }
}