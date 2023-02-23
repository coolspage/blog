<template>
  <div>
    <h1>登录和注册</h1>
    <div class="tab">
      <button class="tablinks" :class="{active: activeTab === 'login'}" @click="setActiveTab('login')">登录</button>
      <button class="tablinks" :class="{active: activeTab === 'register'}" @click="setActiveTab('register')">注册</button>
    </div>
    <div class="tabcontent">
      <login-form v-if="activeTab === 'login'" />
      <registration-form v-if="activeTab === 'register'" />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import RegistrationForm from './RegistrationForm.vue';

export default {
  name: 'LoginAndRegistration',
  components: {
    LoginForm,
    RegistrationForm
  },
  data() {
    return {
      activeTab: 'login'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  }
};
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
  background-color: #ccc;
  border-bottom: 1px solid #ccc;
}

.tabcontent {
  display: none;
}

.tabcontent.show {
  display: block;
}
</style>
