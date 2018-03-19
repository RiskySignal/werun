/*
* @Author: Neeze@ZJS
* @Date:   2018-03-18
* @Email:  543457946@qq.com
* @Description: get params from url link when use hash web router, and auto decode
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-19
*/
define(["../var/class2type.js"], function(class2type) {
    return function paramsExtract(paramName) {
        let hashUrlDetail = location.hash.split("?"),
            path = hashUrlDetail[0],
            hashName = path.split("#/")[1],
            params = hashUrlDetail[1] ? hashUrlDetail[1].split("&") : [],
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
                hashName,
                params: query
            };
        }
    };
});
