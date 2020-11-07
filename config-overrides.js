const path = require("path");

module.exports = (config) => {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@store": path.resolve(__dirname, "./src/store"),
			"@saga": path.resolve(__dirname, "./src/saga"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@styles": path.resolve(__dirname, "./src/styles")
		}
	};

	return config;
};
