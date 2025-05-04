import axios from 'axios'

// Create an Axios instance
const axiosClient = axios.create({
  baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`, //http://localhost:8080/,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout after 10 seconds
})

// Request interceptor — Add auth token if available
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor — Handle global errors
axiosClient.interceptors.response.use(
  (response) => {
    const axiosData = response.data

    if (axiosData.pagination) {
      return axiosData
    }

    return axiosData.data
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response

      // Handle unauthorized error
      if (status === 401 || status === 403) {
        console.warn('Unauthorized access - token may be expired')
        // You can dispatch a logout or redirect to login here
      }

      console.error('API Error:', data?.message || error.message)
    } else {
      console.error('Network/API Error:', error.message)
    }

    return Promise.reject(error)
  },
)

export default axiosClient
