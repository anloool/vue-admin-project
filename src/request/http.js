import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import Qs from 'qs'
import { Loading, Message } from 'element-ui'

const $axios = axios.create({
  // 设置超时
  timeout: 50000,
  // 基础url, 会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API
})

Vue.prototype.$http = axios
// 在全局请求和响应拦截器中添加请求状态
let loading = null

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    loading = Loading.service({ text: '拼命加载中' })
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  }
)

// 响应拦截器
$axios.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (loading) {
      loading.close()
    }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回401 清除token信息并跳转到登陆页面
          store.commit('DEL_TOKEN')
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        case 404:
          Message.error('网络请求不存在')
          break
        default:
          Message.error(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        Message.error('请求超时！请检查网络是否正常')
      } else {
        Message.error('请求失败，请检查网络是否已连接')
      }
    }
  }
)

// 封装get，post请求方法
export function get (url, params) {
  return new Promise((resolve, reject) => {
    $axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    $axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
