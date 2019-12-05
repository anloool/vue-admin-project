import router from '@/router'

export default {
  SET_USERINFO (state, payload) {
    state.userInfo = payload
  },

  DEL_USERINFO (state) {
    state.userInfo = {}
  },

  SET_TOKEN (state, val) {
    state.token = val
    localStorage.setItem('token', val)
  },
  DEL_TOKEN (state) {
    state.token = ''
    localStorage.removeItem('token')
    router.push({
      path: '/login',
      query: {
          redirect: '/'
      }
    })
  }
}
