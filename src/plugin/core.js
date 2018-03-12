/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: core function for plugins' extends
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/

define(function() {
	const version = "0.0.1",
		// Define a local copy for Werun
		Werun = function() {
			console.log("This is plugins for Werun!");

			return this;
		};

	Werun.prototype = {
		// The current version of Werun being used
		werun: version
	};

	Werun.extend = function() {
		let options,
			name,
			src,
			copy,
			copyIsArray,
			clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation(The default copy is shallow copy)
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !isFunction(target)) {
			target = {};
		}
	};
});
