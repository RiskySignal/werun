/*
* @Author: Neeze@ZJS
* @Date:   2018-03-15
* @Email:  543457946@qq.com
* @Description: webpack testing config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-15
*/
const testEnv = require("../../env/test.env.js");
const webpack = require("webpack");
const friendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
    stats: "none",
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
    plugins: [
        new friendlyErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": testEnv // to be compatible with webpack enviroment plugin
        })
    ]
};
