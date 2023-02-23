<template>
  <el-card shadow="hover" class="loginCard">
    <form @submit.prevent="submitForm">
      <el-input id="username" v-model="username" placeholder="用户名" class="input"/>
      <el-input id="password" type="password" v-model="password" placeholder="密码" class="input" show-password/>
      <el-button @click="submitForm">登录</el-button>
    </form>
  </el-card>
</template>

<script setup>
import axios from 'axios';
import {ref} from "vue";

let name = 'LoginForm'
let username = ref('')
let password = ref('')

let emits = defineEmits(['logSuc'])

let submitForm = () => {
  axios.get('http://20.210.90.22:23000/users')
      .then(response => {
        const user = response.data.find(user => user.username === username && user.password === password);
        if (user) {
          console.log('Logged in');
        } else {
          console.log('Invalid username or password');
        }
        username = '';
        password = '';
        emits('logSuc')
      })
      .catch(error => {
        console.log(error);
      });


}
</script>

<style>
.input {
  padding-bottom: 20px;
}
</style>