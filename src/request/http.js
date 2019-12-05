import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

const $axios = axios.create({
    // 设置超时
    timeout: 50000,
    // 基础url, 会在请求url中自动添加前置链接
    baseURL: process.env.VUE_APP_BASE_API
})

Vue.prototype.$http = axios

// 封装get，post请求方法
export function get(url, params) {
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

export function post(url, params) {
    return new Promise((resolve, reject) => {
        $axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}