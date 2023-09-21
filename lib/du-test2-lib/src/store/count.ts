import { defineStore } from "pinia"

export const useCount = defineStore('count', {
  state: () => ({
    count: 2
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
