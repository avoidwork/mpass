/**
 * Generates a random number between 0 & ceiling
 *
 * @method random
 * @param  {Number} arg Ceiling
 * @return {Number}     Random number between 0 and ceiling
 */
function random( arg, used ) {
	var n;

	do {
		n = Math.floor( Math.random() * ( arg + 1 ) );
	}
	while ( used[n] );

	used[n] = 1;

	return n;
}
