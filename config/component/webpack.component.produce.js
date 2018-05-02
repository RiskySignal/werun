/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's producing config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-08
*/

"use strict";

process.env.CONFIG_ENV = "pro";

let {
    resolve,
    entry,
    proOutput,
    loaders,
    plugins,
    stats
} = require("./webpack.component.base.js");
const CleanwebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackMonitor = require("webpack-monitor");
const webpack = require("webpack");
const proEnv = require("../../env/pro.env");
const resolvePath = require("../resolve-path")(__dirname);

let proPlugins = [
    new WebpackMonitor({
        target: resolvePath("../../monitor/stats.json")
    }),
    new CleanwebpackPlugin([resolvePath("../../dist/web")], {
        root: resolvePath("../../")
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    }),
    new webpack.DefinePlugin({
        "process.env": proEnv // to be compatible with webpack enviroment plugin
    }),
    new webpack.BannerPlugin("哈尔滨工业大学(威海) 软件学院 WeRun 俱乐部")
];
proPlugins = plugins.concat(proPlugins);

module.exports = {
    stats,
    resolve,
    devtool: "cheap-module-source-map",
    entry,
    output: proOutput,
    module: {
        loaders
    },
    plugins: proPlugins
};
