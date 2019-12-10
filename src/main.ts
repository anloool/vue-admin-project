import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './plugins/element.js'
// 引入svg组件，并全局注册
import SvgIcon from '@/components/SvgIcon.vue'
Vue.component('svg-icon', SvgIcon)

// 富文本
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
