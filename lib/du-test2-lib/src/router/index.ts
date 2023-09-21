import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp } from 'vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const app = createApp({})
app.use(router)

app.mount('#app')

export default router;