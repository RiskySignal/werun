/*
* @Author: Neeze@ZJS
* @Date:   2018-03-18
* @Email:  543457946@qq.com
* @Description: get params from url link when use default web router, and auto decode
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-19
*/
define(["../var/class2type.js"], function(class2type) {
    return function getParams(paramName) {
        let url = location.href, // 地址栏
            urlSplitArray = url.split("?"),
            path = urlSplitArray[0],
            params = urlSplitArray[1] ? urlSplitArray[1].split("&") : [],
            query = class2type;

        for (let i = 0; i < params.length; i++) {
            let item = params[i].split("=");
            query[item[0]] = item[1];
        }

        if (paramName !== undefined) {
            return query[paramName] || "";
        } else {
            return {
                path,
                params: query
            };
        }
    };
});
