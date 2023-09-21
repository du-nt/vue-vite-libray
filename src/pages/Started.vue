<template>
  <div>Get started</div>
  <div>Cart</div>
  <div>Total: {{cart.total}}</div>
  <ul>
    <li v-for="item in cart.cart" :key="item">{{item}}</li>
  </ul>
  <button @click="cart.addToCart">Add to cart</button>
</template>


<script setup lang='ts'>
import {useCart} from '../store/cart'

const cart = useCart()
</script>
