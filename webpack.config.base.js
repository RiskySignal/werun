/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's basic config file
* you should alter entries and basic setting in the file, so you don't need to do so both in dev and produce config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2017-12-24
*/

/** @dependencies */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const fs = require("fs");
const path = require("path");

/** exclude pattern */
const _ExcludeReg = /(node_modules|bower_components)/;

/** devServer options */
const devServer = {
    port: 8000,
    // if "open" values "true", it will open default web browser for you automaticly
    open: false,
    openPage: "./index.html",
    // proxy server to exchange matched request to server node
    proxy: {
        "/serverPath/*": {
            target: "http://172.29.131.144:7090/",
            secure: false
        }
    },
    inline: true,
    clientLogLevel: "warning"
    // if you set "noinfo" to true, there will be nothing in console log when packing
    // noinfo: true,

    // use https in developing enviroment
    // https: {
    //     cert: fs.readFileSync("path-to-cert-file.pem"),
    //     key: fs.readFileSync("path-to-key-file.pem"),
    //     cacert: fs.readFileSync("path-to-cacert-file.pem")
    // }
};

/** resolve options */
const resolve = {
    extensions: ["*", ".js", ".jsx", ".scss", ".css"]
};

/** entry options */
const entry = {
    // index: path.resolve(__dirname, "./src/index.jsx"),
    react_bundle: ["react", "react-dom", "prop-types"]
};

/** output options */
const devOutput = {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "javascript/[name].[chunkHash].js"
};
const proOutput = {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./",
    filename: "javascript/[name].[chunkHash].js"
};

/** loaders options */
const loaders = [
    {
        /* scss */
        test: /\.scss$/,
        exclude: _ExcludeReg,
        loader: ExtractTextPlugin.extract({
            fallback: ["style-loader"],
            use: ["css-loader", "postcss-loader", "sass-loader"],
            publicPath: "../"
        })
    },
    {
        /* css */
        test: /\.css$/,
        exclude: _ExcludeReg,
        loader: ExtractTextPlugin.extract({
            fallback: ["style-loader"],
            use: ["css-loader", "postcss-loader"],
            publicPath: "../"
        })
    },
    {
        /* images */
        test: /\.(png|jpg|gif)$/,
        exclude: _ExcludeReg,
        loader: "url-loader?limit=8192&name=images/[name].[ext]"
    },
    {
        /* font family */
        test: /\.(ttf|eot|svg|woff)(\?[\s\S]+)?$/,
        exclude: _ExcludeReg,
        use: "file-loader?name=fonts/[name].[ext]"
    },
    {
        /* html with images */
        test: /\.html$/,
        exclude: _ExcludeReg,
        loader: "html-withimg-loader"
    }
];

/** plugins options */
const plugins = [
    new ExtractTextPlugin("css/[name].[chunkHash].css"),
    new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom",
        PropTypes: "prop-types"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ["react_bundle"],
        filename: "js/[name].js",
        minChunks: Infinity
    })
    // new HtmlWebpackPlugin({
    //     showErrors: false,
    //     template: path.resolve(__dirname, "./src/client/template/index.html"), //网页原型
    //     filename: "./index.html", // 登陆
    //     chunks: ["react_bundle", "index"]
    // })
];

/** exclude path regulation option */
module.exports = {
    _ExcludeReg,
    plugins,
    loaders,
    devOutput,
    proOutput,
    devServer,
    resolve,
    entry
};
