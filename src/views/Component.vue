<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue App" @getMsg="getMsg"></HelloWorld>
    <p>{{msg1}}</p>
    <p>{{val1}}</p>
    <el-button @click="add">按钮</el-button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { debuglog } from "util";
export default {
  name: "componnet",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg1: "",
      val1: 0
    };
  },
  methods: {
    getMsg(val) {
      this.msg1 = val;
    },
    add() {
      this.val1=this.Common.add(this.val1);
    }
  }
};
</script>

<style scoped>
</style>
