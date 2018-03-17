/*
* @Author: Neeze@ZJS
* @Date:   2018-03-15
* @Email:  543457946@qq.com
* @Description: Karma configuration for plugin
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-17
*/
const readline = require("readline");
const webpackTestConfig = require("./webpack.plugin.test.js");

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "../../",

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["jasmine"],

        // list of files / patterns to load in the browser
        files: ["test/plugin/**/*.[sS]pec.js"],

        // list of files / patterns to exclude
        exclude: [],

        // use webpack to pre process the entry files
        webpack: webpackTestConfig,
        webpackMiddleware: {
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
        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "test/plugin/**/*.[sS]pec.js": ["webpack"]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["mocha"],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // you can use browserstack or any other famous to test
        // just use "ChromeHeadless" to simplify the `test` process
        browsers: ["ChromeHeadless"],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
