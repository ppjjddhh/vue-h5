/** 
 * @name: 转换成vh vw配置
 * @desc: 描述
 * @params viewportWidth 设置试图宽度
 */
module.exports = {
   plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        'postcss-px-to-viewport': {
        viewportWidth: 375,
        },
    },
};
