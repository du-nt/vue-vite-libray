<template>
 <router-link to="/started">Get started</router-link>
 <router-link to="/">Go to home</router-link>
 <div>About us</div>
<div>Count: {{count}}</div>
<div>Double count: {{doubleCount}}</div>
</template>

<script setup lang='ts'>
import {useCount} from '../store/count'

const {count, doubleCount} = useCount()
</script>
