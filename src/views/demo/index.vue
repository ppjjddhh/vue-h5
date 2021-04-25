<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <van-button class="button" type="primary" @click="get">主要按钮</van-button>
  </div>
</template>

<script>

import {
  getArticleListByCategory,
} from './http/index';

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
        return{
            val:'',
            selectKey:'',
            seleceIf:false
        }
    },
   mounted(){
    
   },
   methods: {
    get() {
       getArticleListByCategory({
         phone: '13615685071',
         page: 1,
         size: 20
       }).then(res => {
         console.log(res);
       })
     }
   }
}
</script>
<style type="scss" scoped>
.button {
  width: 100px;
}
</style>
