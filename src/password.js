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
