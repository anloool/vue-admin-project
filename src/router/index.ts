import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const getComponent = (name:string, component:string) => () => import(`@/views/${name}/${component}.vue`)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: getComponent('login', 'index'),
    meta: { title: '登录页' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashbord',
    children: [
      {
        path: '/dashbord',
        name: 'dashbord',
        component: getComponent('dashbord', 'index'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/layout/index.vue'),
    redirect: '/base-form',
    meta: { title: '表单' },
    children: [
      {
        path: '/base-form',
        name: 'base-form',
        component: getComponent('form', 'base-form'),
        meta: { title: '基本表单' }
      },
      {
        path: '/upload-form',
        name: 'upload-form',
        component: getComponent('form', 'upload-form'),
        meta: { title: '文件上传' }
      },
      {
        path: '/summernote-form',
        name: 'summernote-form',
        component: getComponent('form', 'summernote-form'),
        meta: { title: '富文本' }
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/layout/index.vue'),
    redirect: '/base-table',
    meta: { title: '表格' },
    children: [
      {
        path: '/base-table',
        name: 'base-table',
        component: getComponent('table', 'base-table'),
        meta: { title: '普通表格' }
      },
      {
        path: '/complex-table',
        name: 'complex-table',
        component: getComponent('table', 'complex-table'),
        meta: { title: '复杂表格' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫// document.title = getTitle(to.meta.title)
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (store.state.token) {
      const userInfo = store.getters.userInfo
      if (Object.keys(userInfo).length > 0) {
        next()
      } else {
      // 获取个人信息
      // await store.dispatch('_getInfo')
      //   try {
      //       const { roles } = await store.dispatch('user/_getInfo')
      //       const addRoutes = await store.dispatch(
      //           'permission/getAsyncRoutes',
      //           roles
      //       )
      //       router.addRoutes(addRoutes)
      //       next({...to, replace: true })
      //   } catch (error) {
      //       this.$message.error(error)
      //   }
        try {
          const { roles } = await store.dispatch('_getInfo')
          next()
          // next({...to, replace: true })
        } catch (err) {
          this.$message.error(err)
        }
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})

export default router
