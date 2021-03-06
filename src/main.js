import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import store from './store'
import router from './route/index'
import vueScroll from '@/utils/vue-scroll.js'

import './assets/styles/main.scss'

vueScroll();

Vue.config.productionTip = false

Vue.use(Vuelidate)

store.dispatch('initializeApp').then(() => {
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
})
