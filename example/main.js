import Vue from 'vue'
import App from './App.vue'
import EleTable from '../src/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(EleTable, {
  // 默认每页显示个数
  defaultSize: 5,
  // 请求参数的 key
  paramsKey: {
    page: 'page',
    size: 'per_page',
    orderAsc: 'asc',
    orderDesc: 'desc',
    filter: '',
    filterTime: '',
    searchField: '',
    searchKeyword: ''
  },

  editable: {
    image: {
      lazy: true
    },
    'upload-image': {
      lazy: true
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
