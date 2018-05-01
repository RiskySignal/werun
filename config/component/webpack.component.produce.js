/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's producing config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-08
*/
const bootstrapEntryPoints = require("./webpack.bootstrap.config.js");

/* dependencies */
let {
    resolve,
    entry,
    proOutput,
    loaders,
    plugins,
    _ExcludeReg
} = require("./webpack.component.base.js");
const CleanwebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

let proPlugins = [
    new CleanwebpackPlugin([path.resolve(__dirname, "./dist/web")]),
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
    })
];
proPlugins = plugins.concat(proPlugins);

entry.bootstrap_bundle = bootstrapEntryPoints.prod;

module.exports = {
    resolve,
    devtool: "cheap-module-source-map",
    entry,
    output: proOutput,
    module: {
        loaders
    },
    plugins: proPlugins
};
