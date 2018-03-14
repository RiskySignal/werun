/*
* @Author: Neeze@ZJS
* @Date:   2018-03-13
* @Email:  543457946@qq.com
* @Description: webpack developing config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
const baseConfig = require("./webpack.plugin.base.js");
const merge = require("webpack-merge");
const webpack = require("webpack");
const devEnv = require("../../env/dev.env.js");

module.exports = merge(baseConfig, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": devEnv // to be compatible with webpack enviroment plugin
        })
    ]
});
