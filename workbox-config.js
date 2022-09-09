module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,html,webp,png,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};