/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's devloping config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2017-12-24
*/

/* dependencies */
const {
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

let devPlugins = [
    new WebpackMonitor({
        target: "./monitor/stats.json"
    }),
    new webpack.EnvironmentPlugin({
        WEBPACK_ENV: "dev"
    })
];
devPlugins = devPlugins.concat(plugins);
let devLoaders = [
    {
        /* react jsx */
        test: /\.js[x]?$/,
        loader: ["react-hot", "babel-loader"],
        exclude: _ExcludeReg
    },
    {
        /* json: static data to replace server data when development  */
        test: /\.json$/,
        exclude: _ExcludeReg,
        loader: "json-loader"
    }
];
devLoaders = loaders.concat(devLoaders);

module.exports = {
    devServer,
    devtool: "cheap-module-eval-source-map",
    resolve,
    entry,
    output,
    module: {
        loaders: devLoaders
    },
    plugins: devPlugins
};
