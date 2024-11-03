import { Api } from '@/services/api'

export const SERVER_URL = 'http://10.0.166.14:8000'
export const API_URL = `${SERVER_URL}/api/v1`
export const LOGO_URL = `${SERVER_URL}/static/paradoxlogo.png`

export const api = new Api({
  baseUrl: API_URL,
  securityWorker: async () => {
    const token = localStorage.getItem('accessToken')
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
  },
  baseApiParams: {}
})

export * from './api'
