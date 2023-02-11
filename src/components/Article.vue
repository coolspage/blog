<template>
  <div class="article">
    <h1 class="article__title">{{ article.title }}</h1>
    <p class="article__meta">
      {{ article.author }} 发表于 {{ formatDate(article.date) }}
    </p>
    <div class="article__content" v-html="article.content"></div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
  },
};
</script>

<style scoped>
.article {
  margin-bottom: 40px;
}

.article__title {
  margin: 0;
  font-size: 32px;
}

.article__meta {
  margin: 10px 0;
  color: #999;
  font-size: 14px;
}

.article__content {
  line-height: 1.8;
  font-size: 16px;
}
</style>
