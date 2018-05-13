"use strict";

/** @dependencies */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolvePath = require("../resolve-path")(__dirname);
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const clc = require("cli-color");

/** exclude pattern */
const _ExcludeReg = /(node_modules|bower_components|external-source)/;

/** message */
const message =
    clc.whiteBright.bgWhite("-------------------- ") +
    clc.bgWhite.green(" 🐢 ") +
    clc.bgWhite.redBright("Werun Plugin(Powered by WeRun Club of HITWH)") +
    clc.whiteBright.bgWhite(" ------------------");

/** devServer options */
const devServer = {
    // host: "10.236.26.253",
    port: 8000,
    // if "open" values "true", it will open default web browser for you automatic
    open: false,
    openPage: "./default.html",
    // proxy server to exchange matched request to server node
    proxy: {
        "/home/*": {
            target: "http://120.77.212.147:8888/home",
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

const note =
    process.env.CONFIG_ENV === "dev"
        ? "Your application is running here http://" +
        devServer.host +
        ":" +
        devServer.port
        : "Your application is builded in 'dist'";

/** resolve options */
const resolve = {
    extensions: ["*", ".js", ".jsx"]
};

/** entry options */
const entry = {
    index: resolvePath("../../src/client/page/page"),
    default: resolvePath("../../src/client/page/default/default"),
    react_bundle: ["react", "react-dom", "prop-types", "react-router-dom"],
    werun: resolvePath("../../src/plugin/werun.js"),
    bootstrap_bundle: ["react-bootstrap", "bootstrap/dist/css/bootstrap.css"],
    animate: "animate.css",
    minireset: [
        "minireset.css",
        resolvePath("../../src/external-source/css/customer.scss"),
        resolvePath("../../src/external-source/css/resetRem.scss")
    ]
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
        /* customer scss */
        test: /\.[s]?css$/,
        exclude: _ExcludeReg,
        loader: ExtractTextPlugin.extract({
            fallback: ["style-loader"],
            use: [
                "css-loader",
                {
                    loader: "px2rem-loader",
                    options: {
                        remUnit: 10
                    }
                },
                "postcss-loader",
                "sass-loader"
            ],
            publicPath: "../"
        })
    },
    {
        /* node modules scss */
        test: /\.[s]?css$/,
        include: _ExcludeReg,
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
            name: "media/[name].[ext]"
        }
    },
    {
        /* font family */
        test: /\.(ttf|eot|svg|woff|woff2|MOV|webm)(\?[\s\S]+)?$/,
        use: "file-loader?name=media/[name].[ext]"
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
        Bootstrap: "react-bootstrap",
    }),
    new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
            messages: [message],
            notes: [note]
        }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: ["minireset", "animate", "bootstrap_bundle", "react_bundle"],
        filename: "js/[name].js",
        minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
        showErrors: false,
        template: resolvePath("../../src/client/page/template.html"),
        filename: "./index.html", // 登陆
        chunks: [
            "minireset",
            "animate",
            "bootstrap_bundle",
            "react_bundle",
            "index"
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
