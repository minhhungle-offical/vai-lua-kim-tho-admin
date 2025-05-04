import axiosClient from './axiosClient'
const url = '/auth'

export const authApi = {
  login(body) {
    return axiosClient.post(`${url}/login`, body)
  },
  signUp(body) {
    return axiosClient.post(`${url}/sign-up`, body)
  },
}
