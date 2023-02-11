import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api'

function getToken() {
  const token = localStorage.getItem('token')
  if (token) {
    return `Bearer ${token}`
  } else {
    return ''
  }
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: getToken()
  }
})

export async function login(username, password) {
  const { data } = await api.post('/users/login', {
    username,
    password
  })
  localStorage.setItem('token', data.token)
  return data
}

export async function register(username, password, email) {
  const { data } = await api.post('/users/register', {
    username,
    password,
    email
  })
  return data
}

export async function getRecentArticles() {
  const { data } = await api.get('/articles', {
    params: {
      sortBy: 'createdAt:desc',
      limit: 5
    }
  })
  return data
}

export async function getHotArticles() {
  const { data } = await api.get('/articles', {
    params: {
      sortBy: 'views:desc',
      limit: 5
    }
  })
  return data
}

export async function getRecommendedArticles() {
  const { data } = await api.get('/articles', {
    params: {
      isRecommended: true,
      limit: 5
    }
  })
  return data
}

export async function getArticleById(id) {
  const { data } = await api.get(`/articles/${id}`)
  return data
}

export async function createArticle(title, content) {
  const { data } = await api.post('/articles', {
    title,
    content
  })
  return data
}

export async function updateArticle(id, title, content) {
  const { data } = await api.put(`/articles/${id}`, {
    title,
    content
  })
  return data
}

export async function deleteArticle(id) {
  const { data } = await api.delete(`/articles/${id}`)
  return data
}

export default {
  login,
  register,
  getRecentArticles,
  getHotArticles,
  getRecommendedArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
}
