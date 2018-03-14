/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: Determine wether the object is a plain object
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-14
*/
define(["./toString", "./getProto", "./hasOwn", "./fnToString"], function(
    toString,
    getProto,
    hasOwn,
    fnToString,
    ObjectFunctionString
) {
    return function isPlainObject(obj) {
        let proto, Ctor;

        // Detext obvious negatives
        // Use to String to catch host objects
        if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
        }

        proto = getProto(obj);

        // Objects with no prototype(e.g., `Object.create(null)`) are plain
        if (!proto) {
            return true;
        }

        // Objects with prototype are plain if they were constructed by a global Object function
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return (
            typeof Ctor === "function" &&
            fnToString.call(Ctor) === ObjectFunctionString
        );
    };
});
