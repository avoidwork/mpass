var mpass = require("../lib/mpass.js" ),
    subs = [ 3, 0, 7, 1 ],
    extra = [ "!", "#", "%", "@", "$" ];

exports["mpass"] = {
	setUp: function (done) {
		done();
	},
	regular: function (test) {
		var x = mpass();

		test.expect(1);
		test.equal(x.length > 0, true, "Should be 'true'");
		test.done();
	},
	special: function (test) {
		var x = mpass(3, true ),
			subFound = false,
			extraFound = false;

		test.expect(6);
		test.equal(x.length > 0, true, "Should be 'true'");
		test.equal(/[A-Z]/.test(x), true, "Should be 'true'");
		test.equal(/[0-9]/.test(x), true, "Should be 'true'");

		subs.forEach(function ( i ) {
			if ( !subFound && x.indexOf( i ) > -1 ) {
				subFound = true;
				test.equal(true, true, "Should be 'true'");
			}
		});

		extra.forEach(function ( i ) {
			if ( !extraFound && x.indexOf( i ) > -1 ) {
				extraFound = true;
				test.equal(true, true, "Should be 'true'");
			}
		});

		test.equal( x.indexOf('undefined'), -1, "Should be '-1'");
		test.done();
	},
	extreme: function (test) {
		var x = mpass(1, true ),
			subFound = false,
			extraFound = false;

		test.expect(6);
		test.equal(x.length > 0, true, "Should be 'true'");
		test.equal(/[A-Z]/.test(x), true, "Should be 'true'");
		test.equal(/[0-9]/.test(x), true, "Should be 'true'");

		subs.forEach(function ( i ) {
			if ( !subFound && x.indexOf( i ) > -1 ) {
				subFound = true;
				test.equal(true, true, "Should be 'true'");
			}
		});

		extra.forEach(function ( i ) {
			if ( !extraFound && x.indexOf( i ) > -1 ) {
				extraFound = true;
				test.equal(true, true, "Should be 'true'");
			}
		});

		test.equal( x.indexOf('undefined'), -1, "Should be '-1'");
		test.done();
	}
};
