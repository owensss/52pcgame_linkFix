var old_thread_pattern=/http:\/\/bbs\.52pcgame\.com\/thread\-([0-9]+)(.*)/;
var new_thread_pattern=/http:\/\/bbs\.52pcgame\.com\/viewthread\.php\?(.*)/;
var old_forum_pattern=/http:\/\/bbs\.52pcgame\.com\/forum-([0-9]+)(.*)/;
var new_forum_pattern=/http:\/\/bbs\.52pcgame\.com\/forumdisplay\.php\?(.*)/;

var links = document.links;
for (var i = 0; i < links.length; ++i) {
	// replace mainpage
	links[i].href = links[i].href.replace("\"http://bbs.52pcgame.com\"", "\"http://121.199.23.180/bbs\"");
	// replace old thread pattern
	links[i].href = links[i].href.replace(old_thread_pattern, function(match, p1, p2) {
		return "http://121.199.23.180/bbs/forum.php?mod=viewthread&tid="+p1+p2;
	}
	);
	// replace new thread pattern
	links[i].href = links[i].href.replace(new_thread_pattern, function(match, p1) {
		return "http://121.199.23.180/bbs/forum.php?mod=viewthread&"+p1;
	}
	);
	// replace old forum
	links[i].href = links[i].href.replace(old_forum_pattern, function(match, p1, p2) {
		return "http://121.199.23.180/bbs/forum.php?mod=forumdisplay&tid="+p1+p2;
	}
	);
	// replace new forum
	links[i].href = links[i].href.replace(new_forum_pattern, function(match, p1) {
		return "http://121.199.23.180/bbs/forum.php?mod=forumdisplay&"+p1;
	}
	);
}

