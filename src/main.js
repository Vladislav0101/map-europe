import Vue from 'vue'
import App from './App.vue'

import i18n from './plugins/i18n'
import router from './router'
import store from './store/index'

import device from 'vue-device-detector'

import './assets/main.css'

Vue.use(device)

Vue.config.productionTip = false

store.dispatch('setLocale', 'en')

new Vue({
    i18n,
    store,
    router,
    render: h => h(App),
}).$mount('#app')