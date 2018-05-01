/*
* @Author: Neeze@ZJS
* @Date:   2018-03-14
* @Email:  543457946@qq.com
* @Description: resolve relative file path with __dirname
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
const path = require("path");

module.exports = function(_dirname) {
    if (!_dirname) {
        throw new Error("resolve function params dismissed!");
    }

    return function resolve(relativePath) {
        relativePath = relativePath || "";

        return path.join(_dirname, relativePath);
    };
};
