/*
* @Author: Neeze@ZJS
* @Date:   2018-03-14
* @Email:  543457946@qq.com
* @Description: return enviroment config of producing
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-15
*/
const merge = require("webpack-merge");
const baseEnv = require("./base.env.js");

module.exports = merge(baseEnv, {
    PRO_ENV: JSON.stringify(true)
});
