"use strict";

/** @dependencies */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolvePath = require("../resolve-path")(__dirname);
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const clc = require("cli-color");

/** exclude pattern */
const _ExcludeReg = /(node_modules|bower_components)/;

/** message */
const message =
    clc.whiteBright.bgWhite("-------------------- ") +
    clc.bgWhite.green(" 🐢 ") +
    clc.bgWhite.redBright("Werun Plugin(Powered by WeRun Club of HITWH)") +
    clc.whiteBright.bgWhite(" ------------------");

/** devServer options */
const devServer = {
    port: 8000,
    // if "open" values "true", it will open default web browser for you automatic
    open: false,
    openPage: "./default.html",
    // proxy server to exchange matched request to server node
    proxy: {
        "/serverPath/*": {
            target: "http://172.29.131.144:7090/",
            secure: false
        }
    },
    inline: true,
    stats: {
        warnings: false,
        version: false,
        hash: false,
        errors: false,
        modules: false,
        usedExports: true,
        chunks: false,
        chunkModules: false
    }
};

/** resolve options */
const resolve = {
    extensions: ["*", ".js", ".jsx"]
};

/** entry options */
const entry = {
    login: resolvePath("../../src/client/page/login/login"),
    default: resolvePath("../../src/client/page/default/default"),
    react_bundle: ["react", "react-dom", "prop-types"],
    werun: "./src/plugin/werun.js",
    bootstrap_bundle: ["react-bootstrap", resolvePath("../../src/external-source/css/bootstrap.css")]
};

/** output options */
const devOutput = {
    path: resolvePath("../../dist/web"),
    publicPath: "/",
    filename: "javascript/[name].[chunkHash].js"
};
const proOutput = {
    path: resolvePath("../../dist/web"),
    publicPath: "./",
    filename: "javascript/[name].min.[chunkHash].js"
};

/** loaders options */
const loaders = [
    {
        /* scss */
        test: /\.[s]?css$/,
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
        options: {
            babelrc: false,
            compact: false,
            presets: ["react", "es2015"],
            plugins: [
                "transform-export-extensions",
                "transform-class-properties"
            ],
            cacheDirectory: true
        }
    },
    {
        /* images */
        test: /\.(png|jpg|gif)$/,
        exclude: _ExcludeReg,
        loader: "url-loader",
        options: {
            limit: 10000,
            name: "images/[name].[ext]"
        }
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
        Bootstrap: "react-bootstrap"
    }),
    new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
            messages: [message]
        }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: [
            "bootstrap_bundle",
            "react_bundle",
        ],
        filename: "js/[name].js",
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        showErrors: false,
        template: resolvePath("../../src/client/page/template/template.html"),
        filename: "./login.html", // 登陆
        chunks: [
            "bootstrap_bundle",
            "react_bundle",
            "login"
        ]
    }),
    new HtmlWebpackPlugin({
        showErrors: false,
        template: resolvePath("../../src/client/page/template/template.html"),
        filename: "./default.html", // 默认测试
        chunks: [
            "bootstrap_bundle",
            "react_bundle",
            "default"
        ]
    })
];

/** exclude path regulation option */
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
    _ExcludeReg,
    plugins,
    loaders,
    devOutput,
    proOutput,
    devServer,
    resolve,
    entry
};
