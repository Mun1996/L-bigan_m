<template>
  <div class="container">
    <van-nav-bar
      title="example"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
  </div>
</template>
<script>
export default {
    name: "example",
    methods: {

    }
}
</script>
<style scoped lang="less">

</style>
