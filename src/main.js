import Vue from 'vue'
import App from './App.vue'
// import router
// import router from './router'
import router from '@/router'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载router
  router
}).$mount('#app')
