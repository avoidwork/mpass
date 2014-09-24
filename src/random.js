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
