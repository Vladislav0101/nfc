import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'

import store from './store'
import router from './route/index'

import './assets/styles/main.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
console.log(process.env)
store.dispatch('initializeApp').then(()=>{
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
})
