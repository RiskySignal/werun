/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: webpack basic config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-13
*/
const path = require("path");
const webpack = require("webpack");
const clc = require("cli-color");
/** HappyPack -> Expect to use parallel processing to improve the packaging speed (But it's actually slower)  */
// const HappyPack = require('happypack');

console.log(
	clc.whiteBright.bgWhite("-------------------- ") +
		clc.bgWhite.green(" 🐢 ") +
		clc.bgWhite.redBright("Werun Plugin(Powered by WeRun Club of HITWH)") +
		clc.whiteBright.bgWhite(" ------------------")
);

const entry = {
		werun: "./src/plugin/werun.js"
	},
	developOutput = {
		path: path.resolve(__dirname, "./dist/plugin"),
		filename: "[name].plugin.js"
	},
	produceOutput = {
		path: path.resolve(__dirname, "./dist/plugin"),
		filename: "[name].plugin.min.js"
	};

const developConfig = {
	entry,
	module: {
		loaders: [
			{
				/* transform es6 syntax */
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					compact: false,
					presets: ["es2015"],
					cacheDirectory: true
				}
			}
		]
	},
	output: developOutput,
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin /* Scope Hoisting */()
	]
};

const produceConfig = {
	entry,
	module: {
		loaders: [
			{
				/* transform es6 syntax */
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					compact: false,
					presets: ["es2015"]
				}
			}
		]
	},
	devtool: "cheap-module-source-map",
	output: produceOutput,
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				drop_console: true // remove 'console' in .min.js
			},
			cache: true, // default cache directory `node_modules/.cache/uglifyjs-webpack-plugin`
			parallel: true, // Enable parallelization
			sourceMap: true,
			ie8: true // enable IE8 support
		}),
		new webpack.optimize.ModuleConcatenationPlugin /* Scope Hoisting */()
	]
};

module.exports = {
	developConfig: developConfig,
	produceConfig: produceConfig
};
