<template>
  <div>
    <h1>登录</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-secondary">登录</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';

let name = 'LoginForm'
let username = ''
let password = ''


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
      })
      .catch(error => {
        console.log(error);
      });


}
</script>

<style>
.btn-primary {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>