<template>
  <h1 class="title">发布推文</h1>
  <el-card shadow="hover" class="iteml">
    <form @submit.prevent="submitForm">
      <el-input
          id="title"
          v-model="title"
          autosize
          type="textarea"
          placeholder="标题"
      />
      <div style="margin: 20px 0"/>
      <el-input
          id="body"
          v-model="body"
          :autosize="{ minRows: 4, maxRows: 8 }"
          type="textarea"
          placeholder="正文"
      />
      <button type="submit" class="btn">发布</button>
    </form>
    </el-card>
</template>
<script>
import axios from 'axios';

export default {
  name: 'PostForm',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    submitForm() {
      const newPost = {
        title: this.title,
        body: this.body
      }
      axios.post('http://20.210.90.22:23000/posts', newPost)
          .then(response => {
            console.log(response.data);
            this.title = '';
            this.body = '';
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: #49F;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
