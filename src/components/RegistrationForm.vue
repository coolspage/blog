<template>
  <el-card shadow="hover" class="loginCard">
    <form @submit.prevent="submitForm">
      <el-input id="username" v-model="username" placeholder="用户名" class="input"/>
      <el-input id="password" type="password" v-model="password" placeholder="密码" class="input" show-password/>
      <el-button type="submit">注册</el-button>
    </form>
  </el-card>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const newUser = {
        username: this.username,
        password: this.password
      }
      axios.post('http://20.210.90.22:23000/users', newUser)
          .then(response => {
            console.log(response.data);
            this.username = '';
            this.password = '';
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style>
.loginCard {
  width: 400px;
  margin: auto;
}
</style>
