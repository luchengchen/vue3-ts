<script setup lang="ts">
defineProps<{ msg: string }>();

const bigList = new Array(200000).fill(null).map((_ele, i) => ({ n: i + 1 }));
console.log(bigList, "11");
</script>

<template>
  <div>
    <div class="container">
      <div class="list">
        <div class="row" v-for="(item, i) in bigList" :key="i">
          {{ item.n }}
        </div>
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 500px;
  overflow-y: scroll;
}
.list {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
