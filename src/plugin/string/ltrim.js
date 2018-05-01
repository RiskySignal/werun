/**
 * 去除字符串左侧空格
 */
define(["../var/isString"], function(isString) {

    return function(source) {
        if (isString(source)) {
            return source.replace(/(^\s*)/g, "");
        }

        return source;
    };
});
