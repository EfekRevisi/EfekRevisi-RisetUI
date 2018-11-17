import Vue from 'vue'
import router from './router'
import App from './App'

import Component from './components'
import Mixins from './mixins'

import './style/scss/main.scss'

/* Register component in main project
 * see file in @/components/index.js
 */

Component.map(x => {
  Vue.component(x.name, x.component)
  return x
})

/* Register mixin in main project
 * see file in @/mixins/index.js
 */

Mixins.map(x => {
  Vue.mixin(x)
  return x
})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
