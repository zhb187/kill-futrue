/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import VueRouter from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './route.js'
window.Vue = require('vue')
Vue.use(ElementUI)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter)
Vue.use(ElementUI)
/**
 * vue common components
 */
Vue.component('sider-bar',require('./components/sider-bar'))
Vue.component('footer-bar',require('./components/footer-bar'))
Vue.component('nav-bar',require('./components/nav-bar'))
/**
 * vue common components end
 */
const router = new VueRouter({
    history: true,
    root: '',
    routes,
})

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App },
}).$mount('#app')
