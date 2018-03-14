/*
* @Author: Neeze@ZJS
* @Date:   2018-03-14
* @Email:  543457946@qq.com
* @Description: return development enviroment config
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
const baseEnv = require("./base.env.js");
const merge = require("webpack-merge");

module.exports = merge(baseEnv, {
    DEV_ENV: JSON.stringify(true)
});
