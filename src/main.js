import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 未ログイン時にルートに飛ばすときなどに利用する
  console.log('global-beforeEach')

  if(to.path === '/users/3'){
    next('/')
  }

  // ページ遷移しない
  // next(false);

  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
