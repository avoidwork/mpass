// Setting the semver version
password.version = "{{VERSION}}";

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