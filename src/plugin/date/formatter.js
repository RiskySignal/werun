/*
* @Author: Neeze@ZJS
* @Date:   2018-03-11
* @Email:  543457946@qq.com
* @Description: format time depending on use's setting and the basic time given(if not, use the current time)
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-17
*/

define(["../core.js", "../var/isString"], function(werun, isString) {
    return function formatter(setting, time, options) {
        /** setting is not defined */
        if (!isString(setting)) {
            throw new Error("In /date/formatter: Invaild setting!");
        }

        /** initial date */
        let customDate = null;
        customDate = time === undefined || !time ? new Date() : new Date(time);
        if (!customDate.getTime() || customDate === "Invaild Date") {
            throw new Error(
                "In /date/formatter: Invaild time!"
            ); /** invaild date error */
        }

        options = werun.extend(
            { globalReplace: false, chineseStyle: false },
            options
        );

        /** year */
        const yearExpre = "(y+)";
        const yearReg = options.globalReplace
            ? new RegExp(yearExpre, "gi")
            : new RegExp(yearExpre, "i");
        setting = setting.replace(yearReg, function(subStr) {
            const start = 4 - subStr.length;

            return (customDate.getFullYear() + "").substr(
                start < 0 ? 0 : start
            );
        });

        /** 存在中文形式的 */
        const chineseEnableArray = {
            "(D+)": customDate.getDay(), // day of a week
            "([Qq]+)": Math.floor((customDate.getMonth() + 3) / 3) // quarter of a year
        };
        const chineseStyleArray = ["一", "二", "三", "四", "五", "六", "七"];
        for (let regString in chineseEnableArray) {
            const chineseEnableReg = options.globalReplace
                ? new RegExp(regString, "g")
                : new RegExp(regString);
            setting = setting.replace(chineseEnableReg, function(subStr) {
                const index = chineseEnableArray[regString] || 7; // process for sunday
                return options.chineseStyle
                    ? chineseStyleArray[index - 1]
                    : index;
            });
        }

        /** 不存在中文形式的 */
        const chineseDisableArray = {
            "m+": customDate.getMinutes(), // minute
            "M+": customDate.getMonth() + 1, // Month
            "d+": customDate.getDate(), // date of a month
            "[Hh]+": customDate.getHours(), // hour
            "S+": customDate.getMilliseconds(), // millisecond
            "s+": customDate.getSeconds() // second
        };
        for (let regString in chineseDisableArray) {
            const chineseDisableReg = options.globalReplace
                ? new RegExp(regString, "g")
                : new RegExp(regString);
            setting = setting.replace(chineseDisableReg, function(subStr) {
                let data = chineseDisableArray[regString].toString();
                const preCompletion = regString === "S+" ? "000" : "00";

                return data.length >= subStr.length
                    ? data
                    : (preCompletion + data).substr(data.length);
            });
        }

        return setting;
    };
});
