/* @licstart The following is the entire license notice for
the JavaScript code within this file (babcom.js).

Copyright (C) 2014  Arne Babenhauserheide

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

As additional permission under GNU GPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU GPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.   

As additional permission under GNU GPL version 3 section 7,
you may use this code under any other free software license,
including permissive licenses like BSD and MIT.

@licend  The above is the entire license notice
for the JavaScript code within this script file.
*/
function loadcomments()
{
var freenetnode = document.getElementById("babcom-node").value
var sonesearch = "/Sone/search.html?query="
var blacklist = /[^a-zA-Z0-9_\/\-\.]*/g; /* inversed whitelist */
var host = window.location.host;
var path = window.location.pathname;
host = host.replace(blacklist, "");
path = path.replace(blacklist, "");
var postsanchor = "post-results";
var comments = document.getElementById("babcom-comments");
var publicsone = document.getElementById("babcom-publicsoneid");
var nojswarning = document.getElementById("babcom-nojswarning");
var needsfreenet = document.getElementById("babcom-needsfreenet");
var sitelink = document.getElementById("babcom-sitelink");
var searchquery = host + path + "#" + postsanchor;
var iframesource = freenetnode + sonesearch + searchquery;
var sitepath = "http://" + host + path;
/* when the function gets rerun, replace the realcomments instead of adding.*/
if (document.getElementById("babcom-realcomments")) {
    var cif = document.getElementById("babcom-realcomments");
    cif.src = iframesource;
} else {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "babcom-realcomments");
    iframe.setAttribute("src", iframesource);
    comments.parentNode.replaceChild(iframe, comments);
}
nojswarning.parentNode.replaceChild(document.createElement("p"), nojswarning);
publicsone.parentNode.replaceChild(document.createElement("span"), publicsone);
sitelink.innerHTML = sitepath;
commentsiframe = document.getElementById("babcom-realcomments");
commentsiframe.onload = function(){
        needsfreenet.parentNode.replaceChild(document.createElement("p"), needsfreenet);
        commentsiframe.style.width = "1024px";
        commentsiframe.style.height = "400px";
    }
}
loadcomments();
document.getElementById("babcom-node").onkeydown = function(e) {
    var keyCode = e.keyCode || e.which;

   if (keyCode === 13) {
     loadcomments();
   }
}