module.exports = {
	skipFiles: [
		"facets/Test1Facet.sol",
		"facets/Test2Facet.sol",
		"mocks/",
		"upgradeInitializers/",
		"interfaces/",
		"libraries/"
	],
	mocha: {
		enableTimeouts: false,
    	timeout: false,
    	grep: "@skip-on-coverage",
    	invert: true,
	},
};