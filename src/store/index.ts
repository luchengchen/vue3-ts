import { defineStore } from "pinia";
// defineStore 方法有两个参数，第一个参数是模块化名字（也就相当于身份证一样，不能重复）

// 第二个参数是选项，对象里面有三个属性，相比于vuex 少了一个 mutations.
export const useStore = defineStore("main", {
  state() {
    //存放的就是模块的变量
    return {
      count: 10,
    };
  },
  getters: {
    //相当于vue中的计算属性，可以缓存数据
  },
  actions: {
    //可以通过actions方法，改变state里面的值
  },
});
