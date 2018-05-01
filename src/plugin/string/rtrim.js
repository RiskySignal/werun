/**
 * 去除字符串右侧的空白
 */
define(["../var/isString"], function(isString) {
    return function(source) {
        if (isString(source)) {
            return source.replace(/(\s*$)/g, "");
        }

        return source;
    };
});
