/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: webpack basic config for werun plugin module
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-15
*/
const webpack = require("webpack");
const clc = require("cli-color");
const resolve = require("../resolve.js")(__dirname);
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
/** HappyPack -> Expect to use parallel processing to improve the packaging speed (But it's actually slower)  */
// const HappyPack = require('happypack');

const message =
    clc.whiteBright.bgWhite("-------------------- ") +
    clc.bgWhite.green(" 🐢 ") +
    clc.bgWhite.redBright("Werun Plugin(Powered by WeRun Club of HITWH)") +
    clc.whiteBright.bgWhite(" ------------------");

module.exports = {
    stats: {
        warnings: false,
        version: false,
        hash: false,
        errors: false,
        modules: false,
        usedExports: true,
        chunks: false,
        chunkModules: false
    },
    entry: {
        werun: resolve("../../src/plugin/werun.js")
    },
    output: {
        path: resolve("../../dist/plugin"),
        filename: "[name].plugin.js"
    },
    module: {
        loaders: [
            {
                /** inspect javascript codes before transforming */
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    cache: true, // set `false` when you are modifying your config files(e.g. .eslintrc and .eslintignore)
                    quiet: true,
                    emitError: false
                }
            },
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
        // it does not work well when use webpack to process plugin project
        // new webpack.optimize.ModuleConcatenationPlugin /* Scope Hoisting */(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [message]
            }
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
