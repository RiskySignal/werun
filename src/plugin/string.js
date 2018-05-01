/**
 * 扩展字符串操作函数
 */
define([
    "./core",
    "./string/trim",
    "./string/rtrim",
    "./string/ltrim"
], function(Werun, trim, rtirm, ltrim) {
    Werun.extend({
        string: {
            trim,
            ltrim,
            rtirm
        }
    });
});
