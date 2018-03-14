/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: Object.hasOwnPrototype.toString() => "function hasOwnPrototype() { [native code] }"
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
define(["./fnToString"], function(fnToString) {
    return fnToString.call(Object);
});
