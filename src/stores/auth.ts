import type { Login, UserProfile } from '@/services/api'
import { defineStore } from 'pinia'
import { login as apiLogin } from '@/services/auth.service'
import {
  getUserProfile as apiGetUserProfile,
  updateProfile as apiUpdateProfile,
  type userProfileUpdateInput
} from '@/services/user.service'
interface authState {
  user: UserProfile | null
  token: string | null
  loading: boolean
  error: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): authState => ({
    user: null,
    token: localStorage.getItem('accessToken') || null,
    loading: false,
    error: ''
  }),
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('accessToken', token)
    },
    async login(payload: Login) {
      this.error = ''
      this.loading = true
      try {
        const response = await apiLogin(payload)
        const { token } = response
        this.setToken(token)
        await this.fetchUser()
      } catch (err) {
        this.error = 'Login failed. Please try again.'
        throw err
      } finally {
        this.loading = false
      }
    },
    async fetchUser() {
      try {
        if (this.token) {
          const response = await apiGetUserProfile()
          this.user = response
        }
      } catch (error) {
        console.error('Failed to load user info', error)
        this.logout()
      }
    },
    async updateProfile(updatedProfile: userProfileUpdateInput) {
      try {
        if (this.token) {
          const response = await apiUpdateProfile(updatedProfile)
          this.user = response
        }
      } catch (error) {
        this.error = 'Oops, have a broken when update your profile!'
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },

    async initializeAuth() {
      const token = localStorage.getItem('accessToken')
      if (token) {
        this.token = token
        await this.fetchUser()
      }
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})
