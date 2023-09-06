<script setup lang="ts">
defineProps<{ msg: string }>();

const bigList = new Array(200000).fill(null).map((_ele, i) => ({ n: i + 1 }));
console.log(bigList, "11");
</script>

<template>
  <div class="faDiv">
    <div class="children">
      <div class="list">
        <div class="row" v-for="(item, i) in bigList" :key="i">
          {{ item.n }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faDiv {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 400px;
  overflow-y: scroll;
}
</style>
