const path = require("path");

module.exports = (config) => {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@api": path.resolve(__dirname, "./src/api"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@styles": path.resolve(__dirname, "./src/styles")
		}
	};

	return config;
};
