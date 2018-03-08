/*
* @Author: Neeze@ZJS
* @Date:   2017-11-29
* @Email:  543457946@qq.com
* @Description: webpack's basic config file
* you should alter entries and basic setting in the file, so you don't need to do so both in dev and produce config file
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-08
*/

/** @dependencies */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    jquery_bundle: "jquery",
    tether_bundle: "tether",
    popper_bundle: "popper.js",
    werun: "./src/plugin/werun.js",
    bootstrap_bundle: null
};

/** output options */
const devOutput = {
    path: path.resolve(__dirname, "./dist/web"),
    publicPath: "/",
    filename: "javascript/[name].[chunkHash].js"
};
const proOutput = {
    path: path.resolve(__dirname, "./dist/web"),
    publicPath: "./",
    filename: "javascript/[name].min.[chunkHash].js"
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
        exclude: _ExcludeReg,
        loader: "babel-loader",
        query: {
            compact: false,
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
        PropTypes: "prop-types",
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: "popper.js",
        "window.Popper": "popper.js",
        Tether: "tether",
        "window.Tether": "tether",
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!bootstrap/js/dist/button",
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports-loader?Util!bootstrap/js/dist/util"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: [
            "react_bundle",
            "bootstrap_bundle",
            "jquery_bundle",
            "tether_bundle",
            "popper_bundle"
        ],
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
        chunks: [
            "jquery_bundle",
            "tether_bundle",
            "popper_bundle",
            "bootstrap_bundle",
            "react_bundle",
            "login"
        ]
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
