<template>
  <!-- vant 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
    <!-- router 动画  -->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!--  vant 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* <!-- 禁用复制功能 --> */
  div {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* 清除Ios输入框内阴影 */
  div {
    -webkit-appearance: none; /* 清除Ios输入框内阴影 */
    -webkit-overflow-scrolling: touch;  /* ios滚动不流畅 */
  }

  /* 禁止保存或拷贝图像 */
  img {
    -webkit-touch-callout: none;
  }

  /* 设置字体禁止缩放 */
  body {
    -webkit-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
  }

  /* 防止android系统中元素被点击时产生边框 */
  a,
  button,
  input,
  textarea {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-modify:read-write-plaintext-only; 
  }
</style>
