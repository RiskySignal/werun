/**
 * 是否为正整数
 */

define(["../var/isString"], function(isString) {
    return function(source) {
        source = isString(source) ? source : source.toString();

        return source.test(/^[0-9]*[1-9][0-9]*$/);
    };
});
