<template>
  <div>
    <Header />
    <form>
      <h2>注册</h2>
      <div>
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <button type="submit" @click.prevent="handleRegister">注册</button>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import api from '../api'

export default {
  name: 'Register',
  components: { Header },
  data() {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    async handleRegister() {
      try {
        await api.register(this.username, this.password, this.email)
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>
