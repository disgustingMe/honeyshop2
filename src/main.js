import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

new Vue({
  Router,
  render: h => h(App)
}).$mount('#app')
