<template>
    <div>
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="article in articles" :key="article.id">
          <Article :article="article" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import Article from './Article.vue'
  
  export default {
    name: 'ArticleList',
    components: { Article },
    props: {
      title: {
        type: String,
        required: true
      },
      articles: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style>
  </style>
  