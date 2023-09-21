<template>
   <FccButton text="My button 3424" />
   <router-link to="/started">Get started</router-link>
 <router-link to="/">Go to home</router-link>
 <router-link to="/about">Go to about</router-link>
 <router-link to="/users">Go to users</router-link>
    <router-view />
</template>

<script setup lang="ts">
import { FccButton } from 'du-test2-lib'
import "du-test2-lib/style.css"
</script>
