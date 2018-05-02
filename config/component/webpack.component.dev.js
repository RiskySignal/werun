/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's devloping config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-17
*/
"use strict";

process.env.CONFIG_ENV = "dev";

/* dependencies */
let {
    devServer,
    resolve,
    entry,
    devOutput,
    loaders,
    plugins,
    _ExcludeReg
} = require("./webpack.component.base.js");
const webpack = require("webpack");
const devEnv = require("../../env/dev.env.js");

let devPlugins = [
    new webpack.DefinePlugin({
        "process.env": devEnv // to be compatible with webpack enviroment plugin
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

module.exports = {
    devServer,
    devtool: "cheap-module-eval-source-map",
    resolve,
    entry,
    output: devOutput,
    module: {
        loaders: devLoaders
    },
    plugins: devPlugins,
};
