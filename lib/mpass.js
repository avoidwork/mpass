/**
 * Mnemonic password generator
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2016 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/mpass/master/LICENSE>
 * @link http://avoidwork.github.io/mpass
 * @module mpass
 * @version 1.0.3
 */
(function (global, mwords) {
"use strict";

var words = mwords || require("mwords"),
	nth = words.length,
	replace = ["e", "o", "t", "l"],
	subs = [3, 0, 7, 1],
	extra = ["!", "#", "%", "@", "$"],
	rth = replace.length,
	eth = extra.length;

/**
 * Mnemonic password generator
 *
 * @method password
 * @param  {Number}  n       Number of words to use (3)
 * @param  {Boolean} special Use special characters (false)
 * @return {String}          Password
 */
function password (n, special) {
	n = n || 3;
	special = special === true;
	var result = "",
		i = -1,
		used = {},
		hasSub = false,
		hasExtra = false,
		flip, lth, pos, rnd, word;

	function sub (x, idx) {
		if (!hasSub && word.indexOf(x) > -1) {
			word = word.replace(x, subs[idx]);
			hasSub = true;
			flip = false;
		}
	}

	if (!special) {
		while (++i < n) {
			result += words[random(nth, used)];
		}
	} else {
		rnd = Math.floor(Math.random() * n);

		while (++i < n) {
			word = words[random(nth, used)];

			// Capitalizing a letter in a word
			if (i === rnd) {
				lth = word.length;
				pos = Math.floor(Math.random() * lth);

				if (pos === 0) {
					word = word.charAt(0).toUpperCase() + word.slice(1);
				} else if (pos < lth - 1) {
					word = word.slice(0, pos) + word.charAt(pos).toUpperCase() + word.slice(pos + 1, lth);
				} else {
					word = word.slice(0, pos) + word.charAt(pos).toUpperCase();
				}
			}
			// or specializing if in the second half
			else if (i >= ( n / 2 )) {
				// Simulating a coin flip
				flip = Math.random() >= 0.5 ? 1 : 0;

				// Substituting a character
				if (flip && !hasSub) {
					replace.forEach(sub);
				}

				// Adding a character
				if (flip && !hasExtra) {
					word += extra[Math.floor(Math.random() * eth)];
					hasExtra = true;
				}
			}

			result += word;
		}

		if (!hasSub) {
			result += subs[Math.floor(Math.random() * rth)];
		}

		if (!hasExtra) {
			result += extra[Math.floor(Math.random() * eth)];
		}
	}

	return result;
}

/**
 * Generates a random number between 0 & ceiling
 *
 * @method random
 * @param  {Number} arg  Ceiling
 * @param  {Object} used Hash of used indices
 * @return {Number}      Random number between 0 and ceiling
 */
function random (arg, used) {
	var n;

	do {
		n = Math.floor(Math.random() * arg);
	} while (used[n]);

	used[n] = 1;

	return n;
}

// Setting the semver version
password.version = "1.0.3";

// CommonJS, AMD, script tag
if (typeof exports !== "undefined") {
	module.exports = password;
} else if (typeof define === "function" && define.amd) {
	define(function () {
		return password;
	});
} else {
	global.mpass = password;
}}(typeof window !== "undefined" ? window : global, typeof words !== "undefined" ? words : undefined));