<template>
  <div class="" style="color:#999; display: flex; flex-direction: column; align-items: center; font-size: 1rem; padding: 6rem 0;">
    <img src="../assets/empty.png" alt style="width: 4rem; margin-bottom: 1rem;">
    <slot>暂无数据</slot>
  </div>
</template>
<script>
export default {
  name: "ListEmpty"
};
</script>
