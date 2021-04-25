import { createStore } from 'vuex'
import { Toast } from 'vant';


/**
 * @name: 公共state说明
 * @desc: 描述
 * @param loading { any } 全局请求loading
 */
export default createStore({
  state: {
    loading: null
  },
  mutations: {
    /**
     * @name: 公共方法函数说明
     * @desc: 描述
     * @param showLoading { function } 控制全局请求loading的展示
     * @param hideLoading { function } 控制全局请求loading的隐藏
     */
    showLoading(state){
      const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: "加载中..."
      });
      state.loading = toast
    },

    hideLoading (state) {
      state.loading.clear();
    },
  },
  actions: {
  },
  modules: {
  }
})
