/**
 * Mnemonic password generator
 *
 * @method password
 * @param  {Number}  n       Number of words to use (3)
 * @param  {Boolean} special Use special characters (false)
 * @return {String}          Password
 */
function password ( n, special ) {
	n            = n || 3;
	special      = special === true;
	var result   = "",
	    i        = -1,
	    used     = {},
	    hasSub   = false,
	    hasExtra = false,
	    flip, word;

	function sub ( x, idx ) {
		if ( !hasSub && word.indexOf( x ) > -1 ) {
			word = word.replace( x, subs[ idx ] );
			hasSub = true;
			flip = false;
		}
	}

	if (!special) {
		while ( ++i < n ) {
			result += words[ random( nth, used ) ];
		}
	} else {
		while ( ++i < n ) {
			word = words[ random( nth, used ) ];

			// Capitalizing the first word
			if ( i === 0 ) {
				word = word.charAt( 0 ).toUpperCase() + word.slice( 1 );
			}

			// Specializing the second half
			if ( i >= ( n / 2 ) ) {
				// Simulating a coin flip
				flip = Math.random() >= 0.5 ? 1 : 0;

				// Substituting a character
				if ( flip && !hasSub ) {
					replace.forEach( sub );
				}

				// Adding a character
				if ( flip && !hasExtra ) {
					word += extra[ Math.floor( Math.random() * eth ) ];
					hasExtra = true;
				}
			}

			result += word;
		}

		if ( !hasSub ) {
			result += subs[ Math.floor( Math.random() * rth ) ];
		}

		if ( !hasExtra ) {
			result += extra[ Math.floor( Math.random() * eth ) ];
		}
	}

	return result;
}
