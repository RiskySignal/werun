/*
* @Author: Neeze@ZJS
* @Date:   2018-03-13
* @Email:  543457946@qq.com
* @Description: webpack producing config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
const baseConfig = require("./webpack.plugin.base.js");
const merge = require("webpack-merge");
const proEnv = require("../../env/pro.env.js");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
    output: {
        filename: "[name].plugin.min.js"
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true // remove 'console' in .min.js
            },
            cache: true,
            parallel: true, // Enable parallelization
            sourceMap: true,
            ie8: true // enable IE8 support
        }),
        new webpack.DefinePlugin({
            "process.env": proEnv // to be compatible with webpack enviroment plugin
        })
    ]
});
