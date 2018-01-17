/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's devloping config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
const bootstrapEntryPoints = require("./webpack.bootstrap.config.js");

/* dependencies */
let {
    devServer,
    resolve,
    entry,
    devOutput,
    loaders,
    plugins,
    _ExcludeReg
} = require("./webpack.config.base.js");
const WebpackMonitor = require("webpack-monitor");
const webpack = require("webpack");
const path = require("path");

let devPlugins = [
    new WebpackMonitor({
        target: path.resolve(__dirname, "./monitor/stats.json")
    }),
    new webpack.EnvironmentPlugin({
        WEBPACK_ENV: "dev"
    })
];
devPlugins = devPlugins.concat(plugins);

let devLoaders = [
    {
        /* json: static data to replace server data when development  */
        test: /\.json$/,
        exclude: _ExcludeReg,
        loader: "json-loader"
    }
];
devLoaders = loaders.concat(devLoaders);

entry.bootstrap_bundle = bootstrapEntryPoints.dev;

module.exports = {
    devServer,
    devtool: "cheap-module-eval-source-map",
    resolve,
    entry,
    output: devOutput,
    module: {
        loaders: devLoaders
    },
    plugins: devPlugins
};
