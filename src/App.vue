<script setup>
import {ref} from 'vue'
import login from "./components/login.vue";
import newB from "./components/newB.vue";
import edit from "./components/edit.vue";

const pageRef = ref({current: newB})
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
  switch (key) {
    case "1":
      pageRef.value.current = newB;
      break
    case "2":
      pageRef.value.current = edit;
      break
    case "3":
      pageRef.value.current = login;
      break
  }
}
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">最新</el-menu-item>
    <el-menu-item index="2">发送推文</el-menu-item>
    <el-menu-item index="3">注册or登录</el-menu-item>
  </el-menu>
  <component :is="pageRef.current">


  </component>
</template>

<style scoped>

</style>
