import Discovery from '../pages/main/discovery.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Search from '../pages/search/search-page.vue'
import SearchResults from '../pages/search/search-results.vue'

const routes = [
  {
    path: '/',
    redirect() {
      return '/discovery'
    }
  },
  {
    path: '/discovery',
    component: Discovery
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/search/results',
    name: 'search-results',
    component: SearchResults
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
