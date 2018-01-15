/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's basic config file
* you should alter entries and basic setting in the file, so you don't need to do so both in dev and produce config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-01-15
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
    // 根据webpack默认配置无法实现https
    // https: true
};

/** resolve options */
const resolve = {
    extensions: ["*", ".js", ".jsx", ".scss", ".css"]
};

/** entry options */
const entry = {
    login: path.resolve(__dirname, "./src/client/page/login/login.jsx"),
    react_bundle: ["react", "react-dom", "prop-types"],
    html5shiv: path.resolve(
        __dirname,
        "./src/static-source/js/html5shiv.min.js"
    )
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
        /* react jsx */
        test: /\.js[x]?$/,
        loader: "babel-loader",
        exclude: _ExcludeReg,
        query: {
            presets: ["react", "es2015"],
            plugins: [
                "transform-export-extensions",
                "transform-class-properties"
            ]
        }
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
    }),
    new HtmlWebpackPlugin({
        showErrors: false,
        template: path.resolve(
            __dirname,
            "./src/client/page/template/template.html"
        ),
        filename: "./login.html", // 登陆
        chunks: ["react_bundle", "login"]
    })
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
