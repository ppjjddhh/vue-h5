import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fastClick from 'fastclick';
import { 
  Button,
  Toast,
  Loading 
} from 'vant';
import 'vant/lib/index.css';


/**
 *  解决300ms click点击
 * ios click时间延迟过大 ios版本不同
 */
(function () {
    let str = navigator.userAgent.toLowerCase();
    let ver = str.match(/cpu iphone os (.*?) like mac os/);
    fastClick.prototype.focus = function (targetElement) {
      targetElement.focus();
    };
    if (ver && parseInt(ver[1]) >= 11) {
      return //不必引入fastclick文件
    }
    fastClick.attach(document.body);
  })()

/**
 * 全局区分环境 方便后期代码中色涉及环境
 *  localStorage.setItem('NODE_ENV', NODE_ENV);
 */
 const NODE_ENV = process.env.NODE_ENV;
 localStorage.setItem('NODE_ENV', NODE_ENV);

/**
 * vConsole.option
 *   type: object
 *   option : {
 *      @param defaultPlugins        自动初始化并加载的内置插件
 *      @param onReady               回调方法，当 vConsole 完成初始化并加载完内置插件后触发
 *      @param onClearLog            回调方法，点击 Log 或 System 面板的 "Clear" 按钮后出发
 *      @param maxLogNumber          超出上限的日志会被自动清除
 *      @param disableLogScrolling   若为 false，有新日志时面板将不会自动滚动到底部
 *      @param theme                 主题颜色，可选值为 'light'
 *   }
 */
NODE_ENV === 'development' ? new VConsole({
    defaultPlugins: ['system', 'network', 'element', 'storage'],  
    theme: 'light', 
    maxLogNumber: 1000,
}) : () => {
    console.log('test!');
};

createApp(App).use(store).use(router).use(
  Button,
  Toast, // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用
  Loading,
).mount('#app');
