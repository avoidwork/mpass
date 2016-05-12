(function (global, mwords) {
"use strict";

var words = mwords || require("mwords"),
	nth = words.length,
	replace = ["e", "o", "t", "l"],
	subs = [3, 0, 7, 1],
	extra = ["!", "#", "%", "@", "$"],
	rth = replace.length,
	eth = extra.length;
