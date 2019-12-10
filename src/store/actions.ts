import { USER_LOGIN, GET_USER_INFO } from '@/request/api'

export async function _login ({ commit }, params) {
  return new Promise((resolve, reject) => {
    USER_LOGIN(params).then(res => {
      const data = res.data
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function _loginOut ({ commit }) {
  commit('DEL_TOKEN')
  commit('DEL_USERINFO')
}

export function _setToken ({ commit }, val) {
  commit('SET_TOKEN', val)
}

export async function _getInfo ({ commit }) {
  return new Promise((resolve, reject) => {
    GET_USER_INFO().then(res => {
      if (res.code === 0) {
        const userInfo = res.data
        commit('SET_USERINFO', userInfo)
        resolve(res.data)
      } else {
        this.$message.error(res.msg)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
