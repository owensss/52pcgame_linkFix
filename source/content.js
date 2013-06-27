// window.onload = gao;

function replacer(match, p1, offset, string) {
	return "http://121.199.23.180/bbs/forum.php?mod=viewthread&tid="+p1;
}

var pattern=/http:\/\/bbs\.52pcgame\.com\/thread\-([0-9]+)(.*)\.html/;

var links = document.links;
for (var i = 0; i < links.length; ++i) {
	// console.log(links[i]);
	links[i].href = links[i].href.replace(pattern, replacer);
}

