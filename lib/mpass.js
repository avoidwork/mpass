/**
 * Mnemonic password generator
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2014 Jason Mulligan
 * @license BSD-3 <https://raw.github.com/avoidwork/mpass/master/LICENSE>
 * @link http://avoidwork.github.io/mpass
 * @module mpass
 * @version 0.1.0
 */
( function ( global ) {
"use strict";

var words = require( "mwords" ),
    nth   = words.length;

/**
 * Mnemonic password generator
 *
 * @method password
 * @param  {Number} n Number of words to use, default is 3
 * @return {String}   Password
 */
function password ( n ) {
	n          = n || 3;
	var result = "",
	    i      = -1;

	while ( ++i < n ) {
		result += words[random( nth )];
	}

	return result;
}

/**
 * Generates a random number between 0 & ceiling
 *
 * @method random
 * @param  {Number} arg Ceiling
 * @return {Number}     Random number between 0 and ceiling
 */
function random( arg ) {
	return Math.floor( Math.random() * ( arg + 1 ) );
}

module.exports = password;
} )( this );
