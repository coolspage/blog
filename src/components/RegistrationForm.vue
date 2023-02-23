<template>
  <div>
    <h1>注册</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">用户名：</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">注册</button>
    </form>
  </div>
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
.btn-primary {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
