<template>
    <div>
      <Header />
      <main>
        <ArticleList title="最近发表的博文" :articles="recentArticles" />
        <ArticleList title="最热门的博文" :articles="hotArticles" />
        <ArticleList title="推荐的博文" :articles="recommendedArticles" />
        <Sidebar />
      </main>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import ArticleList from '../components/ArticleList.vue'
  import Sidebar from '../components/Sidebar.vue'
  import api from '../api'
  
  export default {
    name: 'Home',
    components: { Header, ArticleList, Sidebar },
    data() {
      return {
        recentArticles: [],
        hotArticles: [],
        recommendedArticles: []
      }
    },
    async created() {
      const { data: recommendedArticles } = await api.getRecommendedArticles()
  
  this.recentArticles = recentArticles
  this.hotArticles = hotArticles
  this.recommendedArticles = recommendedArticles
}
}
</script>

<style>
</style>