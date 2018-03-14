/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: core function for plugins' extends
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-13
*/

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (isFunction, isPlainObject) {
	var version = "0.0.1",

	// Define a local copy for Werun
	Werun = function Werun() {
		return this;
	};

	Werun.prototype = {
		// The current version of Werun being used
		werun: version
	};

	Werun.extend = function () {
		var options = void 0,
		    name = void 0,
		    src = void 0,
		    copy = void 0,
		    copyIsArray = void 0,
		    clone = void 0,
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
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !isFunction(target)) {
			target = {};
		}

		// Extend Werun itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, just clone them
						target[name] = Werun.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	return Werun;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: [[Class]] -> type pairs
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	// [[Class]] -> type pairs
	return {};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: Determine whether a JavaScript object has a specified own property.
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (class2type) {
	return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-11
* @Email:  543457946@qq.com
* @Description:  main javascipt combining all separate methods
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-13
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (werun) {
	werun();
	console.log("123");

	return werun;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: Detemine whether the object is a method
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	return function isFunction(obj) {
		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		return typeof obj === "function" && typeof obj.nodeType !== "number";
	};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: Determine wether the object is a plain object
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(7), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (toString, getProto, hasOwn, fnToString, ObjectFunctionString) {
	return function isPlainObject(obj) {
		var proto = void 0,
		    Ctor = void 0;

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
		return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: return {}.toString
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function function_name(class2type) {
	return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: a method to get object prototypes
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-12
* @Email:  543457946@qq.com
* @Description: return Object.hasOwnProptype.toString function => toString () { [native code] }
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (hasOwn) {
	return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-11
* @Email:  543457946@qq.com
* @Description: combine all functions about time operation
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (werun, formater) {
	return formater;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/*
* @Author: Neeze@ZJS
* @Date:   2018-03-11
* @Email:  543457946@qq.com
* @Description: format time depending on use's setting and the basic time given(if not, use the current time), and ignore the char just after '\'
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/

!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
	return function formater(setting, time) {
		var customDate = null;

		/** initial */
		customDate = time === undefined || !time ? new Date() : new Date(time);
		if (!customDate.getTime() || customDate == "Invaild Date") {
			throw new Error("By /date/formater: " + "Invaild Date!"); /** invaild date error */
		}

		var o = {
			"m+": customDate.getMinutes(), // minute
			"M+": customDate.getMonth() + 1, // Month
			"d+": customDate.getDate(), // date of a month
			"h+": customDate.getHours(), // hour
			"H+": customDate.getHours(), // hour
			S: customDate.getMilliseconds(), // millisecond
			"s+": customDate.getSeconds(), // second
			"q+": Math.floor((customDate.getMonth() + 3) / 3) // quarter of a year
		};

		/** year */
		if (/(y+)/i.test(setting)) {
			setting = setting.replace(RegExp.$1, (customDate.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		/** day of a week */
		if (/D/.test(setting)) {
			var day = customDate.getDay();
			setting = setting.replace(RegExp.$1, day ? day : 7);
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(setting)) setting = setting.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}setting.replace("\\", "");

		return setting;
	};
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);