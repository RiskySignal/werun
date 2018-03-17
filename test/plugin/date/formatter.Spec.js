/*
* @Author: Neeze@ZJS
* @Date:   2018-03-16
* @Email:  543457946@qq.com
* @Description: spec file for date formatter function
* @Last Modified by:   Neeze@ZJS
* @Last Modified time: 2018-03-17
*/
describe("date formatter", function() {
    const formatter = require("../../../src/plugin/date/formatter.js");
    const testTime = new Date(1521215957621); // Fri Mar 16 2018 23:59:17 GMT+0800 (中国标准时间)

    describe("错误测试", function() {
        it("不传入setting时应报错", function() {
            expect(formatter).toThrow(
                new Error("In /date/formatter: Invaild setting!")
            );
        });

        it("传入错误的time时应报错", function() {
            expect(function() {
                formatter("will not work", "这个时间是错的");
            }).toThrow(new Error("In /date/formatter: Invaild time!"));
        });
    });

    describe("选项测试", function() {
        it("中文模式", function() {
            expect(
                formatter("yyyy-MM-dd hh:mm:ss:SSS 周D 第q季度", testTime, {
                    chineseStyle: true
                })
            ).toBe("2018-03-16 23:59:17:621 周五 第一季度");
        });

        it("全局测试", function() {
            expect(
                formatter(
                    "yyyy-MM-dd hh:mm:ss:SSS 周D 第q季度 yyyy",
                    testTime,
                    { globalReplace: true }
                )
            ).toBe("2018-03-16 23:59:17:621 周5 第1季度 2018");
        });
    });

    describe("长度测试", function() {
        describe("年", function() {
            it("返回 > 给定 = 截断输出", function() {
                expect(formatter("yy", testTime)).toBe("18");
            });

            it("返回 <= 给定 = 返回输出", function() {
                expect(formatter("yyyyy", testTime)).toBe("2018");
            });
        });

        describe("中文可行的", function() {
            it("直接替换", function() {
                expect(formatter("DDDDD", testTime)).toBe("5");
            });
        });

        describe("中文不可行的", function() {
            it("返回 >= 给定 = 返回输出", function() {
                expect(formatter("m", testTime)).toBe("59");
            });

            it("返回 < 给定 = 补全输出", function() {
                expect(formatter("MMM", testTime)).toBe("03");
            });
        });
    });
});
