import { defineStore } from 'pinia'
interface LoadingState {
  isLoading: boolean
}

export const useLoadingStore = defineStore('loading', {
  state: (): LoadingState => ({
    isLoading: false
  }),
  actions: {
    loading() {
      this.isLoading = true
    },
    unloading() {
      this.isLoading = false
    }
  }
})
