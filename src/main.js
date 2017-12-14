// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './base/app'
import router from './router'
import VeeValidate from 'vee-validate'
import * as customFilters from './shared/filters/filters'
import store from './shared/store'
// import VueCookies from 'vue-cookies'
// import VueParallaxJs from 'vue-parallax-js'
// import VueScrollTo from 'vue-scrollto'
// import VueWaypoint from 'vue-waypoint'

// Vue config
Vue.config.productionTip = false

// Vue filters
Object.keys(customFilters).forEach(key => {
  Vue.filter(key, customFilters[key])
})

// Vue use
Vue.use(VeeValidate)
// Vue.use(VueScrollTo, {
//   container: 'body',
//   duration: 500,
//   easing: 'ease',
//   offset: 0,
//   cancelable: true,
//   onDone: false,
//   onCancel: false,
//   x: false,
//   y: true
// })
// Vue.use(VueParallaxJs, { minWidth: 1024 })
// Vue.use(VueWaypoint)

// Vue.use(VueCookies)

new Vue({
  router,
  template: '<App/>',
  store: store,
  render: h => h(App)
}).$mount('#app')
