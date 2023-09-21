import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {routes,store as nestedStore } from "du-test2-lib";
import { createPinia } from 'pinia';
import router from './router'



const store =  createPinia()

createApp(App).use(store).use(router).mount('#app')
