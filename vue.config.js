const path = require("path");
const config = require("./config.js");


function resolve(dir) {
    return path.join(__dirname, dir);
}

// 代理域名
const BASIC_HOST_URL = process.env.NODE_ENV === 'production' ? config.baseUrl.test : config.baseUrl.dev;
console.log(BASIC_HOST_URL);

module.exports = {
        // 环境区分publicPath 路径
        publicPath: process.env.NODE_ENV === 'production' 
            ? '/Scale/'
            : '/',
        // 生产环境禁用 eslint-loade
        lintOnSave: process.env.NODE_ENV !== 'production', 
    
        //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
        productionSourceMap: process.env.NODE_ENV === 'production', 
    
        // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
        devServer: {
            proxy: {
                // nginx 服务器配置路径
                '/online_advice': {
                    target: BASIC_HOST_URL, // 代理域名/ip地址
                    changeOrigin: true, // 是否允许跨域
                    pathRewrite: { }
                }
            }
        },
    
        // 快捷路径的配置
        chainWebpack: config => {
            config.resolve.alias
                .set("@", resolve("src"))
                .set("views", resolve("src/views"))
                .set("components", resolve("src/components"))
                .set("assets", resolve("src/assets"))
                .set("public", resolve("public"));
        },

        // 配置sass（css编译工具）
        css: {
            loaderOptions: {
                sass: {
                    /*
                        全局配置 sass 
                        应用vh vw
                        vue3.0后 data 替换为 prependData
                    */
                    prependData: `@import "public/global.scss";`
                }
            }
        },
}