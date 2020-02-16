<style lang="scss">
@import "./assets/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

body{
    background-color: #F0FFFF;
  }
</style>
<script>
  export default {
    name: 'app',
  }
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
