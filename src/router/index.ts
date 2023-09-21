import Started from '../pages/Started.vue'
import Users from '../pages/Users.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/started', component: Started },
  { path: '/users', component: Users },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;