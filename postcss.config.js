/**
 * @Author: Neeze@ZJS
 * @Date:   2017-11-30
 * @Email:  543457946@qq.com
 * @description: postcss config for auto prefixer
 * @Last modified by:   Neeze@ZJS
 * @Last modified time: 2017-11-30
 */

module.exports = {
    plugins: {
        autoprefixer: {
            browsers: [
                "last 10 Chrome versions",
                "last 5 Firefox versions",
                "Safari >= 6",
                "ie >= 8",
                "last 5 versions",
                "> 1%"
            ]
        }
    }
};
