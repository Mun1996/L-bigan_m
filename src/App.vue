<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
@import "./less/common.less";

#app {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}


</style>
