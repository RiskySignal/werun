/*
* @Author: Neeze@ZJS
* @Date:   2018-03-11
* @Email:  543457946@qq.com
* @Description: format time depending on use's setting and the basic time given(if not, use the current time), and ignore the char just after '\'
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-12
*/

define(function() {
	return function formater(setting, time) {
		let customDate = null;

		/** initial */
		customDate = time === undefined || !time ? new Date() : new Date(time);
		if (!customDate.getTime() || customDate == "Invaild Date") {
			throw new Error(
				"By /date/formater: " + "Invaild Date!"
			); /** invaild date error */
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
			setting = setting.replace(
				RegExp.$1,
				(customDate.getFullYear() + "").substr(4 - RegExp.$1.length)
			);
		}

		/** day of a week */
		if (/D/.test(setting)) {
			let day = customDate.getDay();
			setting = setting.replace(RegExp.$1, day ? day : 7);
		}

		for (var k in o)
			if (new RegExp("(" + k + ")").test(setting))
				setting = setting.replace(
					RegExp.$1,
					RegExp.$1.length == 1
						? o[k]
						: ("00" + o[k]).substr(("" + o[k]).length)
				);

		setting.replace("\\", "");

		return setting;
	};
});
