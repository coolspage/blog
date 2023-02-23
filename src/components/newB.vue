<template>
  <div>
    <h1 class="title">浏览推文</h1>
    <el-card v-for="(post,i) in posts" shadow="hover" class="iteml">
      <template #header>
        {{ post.title }}
      </template>
      {{ post.body }}
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    axios.get('http://20.210.90.22:23000/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log(error);
        })
  }
}
</script>

<style>
.title{
  text-align: center;
  line-height: 60px;
  margin-top: 20px;
}
.iteml {
  margin: 20px;
}
</style>