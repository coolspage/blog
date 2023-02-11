<template>
    <aside>
      <h2>网站信息</h2>
      <ul>
        <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
        <li><router-link to="/help">帮助中心</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style>
  </style>
  