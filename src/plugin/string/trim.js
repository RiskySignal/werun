/**
 * 去除字符串两端的空格
 */

define(["../var/isString"], function(isString) {

    return function(source) {
        if (isString(source)) {
            return source.replace(/(^\s*)|(\s*$)/g, "");
        }

        return source;
    };
});
