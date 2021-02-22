const path = require("path");

module.exports = (config) => {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			"@api": path.resolve(__dirname, "./src/api"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@containers": path.resolve(__dirname, "./src/containers"),
			"@data": path.resolve(__dirname, "./src/data"),
			"@sagas": path.resolve(__dirname, "./src/sagas"),
			"@store": path.resolve(__dirname, "./src/store"),
			"@styles": path.resolve(__dirname, "./src/styles"),
			"@utils": path.resolve(__dirname, "./src/utils")
		}
	};

	return config;
};
