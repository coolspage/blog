<template>
  <div>
    <Header />
    <form>
      <h2>登录</h2>
      <div>
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" @click.prevent="handleLogin">登录</button>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import api from '../api'

export default {
  name: 'Login',
  components: { Header },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const { data } = await api.login(this.username, this.password)
        this.$store.commit('setUser', data.user)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
</style>