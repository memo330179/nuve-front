// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Vuex from 'vuex'
import App from './App'
import Seasons from './components/Seasons'
import Media from './components/Media'
import Episodes from './components/Episodes'
import Watch from './components/Watch'
import Login from './components/Login'
import Upload from './components/Upload'
import 'vue2-dropzone/dist/vue2Dropzone.css'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Media },
    { path: '/seasons/:show_id', component: Seasons },
    { path: '/episodes/:season_id', component: Episodes },
    { path: '/watch/:media_id', component: Watch },
    { path: '/login', component: Login },
    { path: '/upload', component: Upload }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
