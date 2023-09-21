<template>
 <router-link to="/started">Get started</router-link>
 <router-link to="/about">Go to about</router-link>
  <div>Homepage</div>
<div>Count: {{store.count}}</div>
<div>Double count: {{store.doubleCount}}</div>
<button @click="store.increment">Increment</button>
</template>

<script setup lang='ts'>
import {useCount} from '../store/count'

const store= useCount()
</script>
