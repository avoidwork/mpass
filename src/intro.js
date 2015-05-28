( function () {
"use strict";

var words = require( "mwords" ),
	nth   = words.length,
	replace = [ "e", "o", "t", "l", "a", "s" ],
	subs = [ 3, 0, 7, 1, "@", "$" ],
	extra = [ "!", "#", "%" ],
	rth = replace.length,
	eth = extra.length;
