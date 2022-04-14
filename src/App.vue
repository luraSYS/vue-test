<template>
  <div class="app-container">
    <h2>App根组件</h2>
    <div class="content">
      <div class="nav">
        <a href="#/home">首页</a>
        <a href="#/about">关于</a>
        <a href="#/help">帮助</a>
      </div>
      <router-view class="box"></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
h2 {
  background-color: aliceblue;
  height: 70px;
  line-height: 70px;
}
a {
  padding: 0 10px;
}
.box {
  height: 160px;
  background-color: pink;
}
</style>
