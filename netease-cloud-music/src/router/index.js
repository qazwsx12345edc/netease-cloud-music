import Discovery from '../pages/discovery.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Search from '../pages/search-page.vue'
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
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
