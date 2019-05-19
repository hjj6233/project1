<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue App" @getMsg="getMsg"></HelloWorld>
    <p>{{msg1}}</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "componnet",
  components: {
    HelloWorld
  },
  data() {
    return {
      msg1: ""
    };
  },
  methods: {
    getMsg(val) {
      this.msg1 = val;
    }
  }
};
</script>

<style scoped>
</style>
