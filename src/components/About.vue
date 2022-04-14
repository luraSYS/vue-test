<template>
  <div class="About-container">
    About
    <div class="nav">
      <a href="#/about">tab1</a>
      <a href="#/about/tab2">tab2</a>
    </div>
    <router-view class="tab"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  padding-right: 10px;
}
.tab {
  height: 100px;
  background-color: orange;
}
</style>
