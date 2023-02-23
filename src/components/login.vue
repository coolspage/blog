<template>
  <div>
    <h1 class="title">登录和注册</h1>
    <div class="tab">
      <button class="tablinks" :class="{active: activeTab === 'login'}" @click="setActiveTab('login')">登录</button>
      <button class="tablinks" :class="{active: activeTab === 'register'}" @click="setActiveTab('register')">注册
      </button>
    </div>
    <div class="tabcontent">
      <component :is="activeTab=='login'?LoginForm:RegistrationForm" @logSuc="$emit('logSuc')">

      </component>
    </div>
  </div>
</template>

<script setup>
import LoginForm from './LoginForm.vue';
import RegistrationForm from './RegistrationForm.vue';
import {ref} from "vue";

let name = 'LoginAndRegistration'


let activeTab = ref('login')


let setActiveTab = (tabName) => {
  activeTab.value = tabName;
}


</script>

<style>
.tab {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.tab button {
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  margin-right: 5px;
  border-bottom: 1px solid transparent;
}

.tab button.active {
  background-color: #409EFF;
  color: white;
  border-bottom: 1px solid #ccc;
}

</style>
