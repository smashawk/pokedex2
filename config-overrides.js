const path = require("path");

module.exports = (config) => {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@js": path.resolve(__dirname, "./src/js"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@styles": path.resolve(__dirname, "./src/styles")
		}
	};

	return config;
};
