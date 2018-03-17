/*
* @Author: Neeze@ZJS
* @Date:   2018-03-17
* @Email:  543457946@qq.com
* @Description: Detemine whether the object is a method
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-17
*/
define(["./toString"], function(toString) {
    return function isString(obj) {
        return toString.call(obj) === "[object String]";
    };
});
