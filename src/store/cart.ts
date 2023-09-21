import { defineStore } from "pinia"

export const useCart = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  getters: {
    total: (state) => state.cart.length
  },
  actions: {
    addToCart() {
      const index = this.cart.length
      this.cart.push(`Laptop ${index}`)
    }
  }
})
