/**
 * 是否为手机号(中国-11位手机号)
 */

define(["../var/isString"], function(isString) {
    return function(source) {
        source = isString(source) ? source : source.toString();

        return source.test();
    };
});
