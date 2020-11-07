const path = require("path");

module.exports = (config) => {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@components": path.resolve(__dirname, "./src/components"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@saga": path.resolve(__dirname, "./src/saga"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@styles": path.resolve(__dirname, "./src/styles")
		}
	};

	return config;
};
