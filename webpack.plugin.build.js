/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: webpack config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
const path = require("path");

module.exports = {
	entry: {
		werun: "./src/plugin/werun.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist/plugin"),
		filename: "[name].plugin.js"
	}
};
