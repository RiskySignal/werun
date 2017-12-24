/**
 * @Author: Neeze@ZJS
 * @Date:   2017-11-29
 * @Email:  543457946@qq.com
 * @description: webpack produce config
 * @Last modified by:   Neeze@ZJS
 * @Last modified time: 2017-11-30
 */
/* dependencies */
import {
    resolve,
    entry,
    output,
    loaders,
    plugins,
    _ExcludeReg
} from "./webpack.config.base.js";
const CleanwebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

let proPlugins = [
    new CleanwebpackPlugin(["../dist"]),
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
let proLoaders = [
    {
        /* react jsx */
        test: /\.js[x]?$/,
        loader: ["license-loader", "babel-loader"],
        exclude: _ExcludeReg
    }
];
proLoaders = loaders.concat(proLoaders);

module.exports = {
    resolve,
    devtool: "cheap-module-source-map",
    entry,
    output,
    module: {
        loaders: proLoaders
    },
    plugins: proPlugins
};
