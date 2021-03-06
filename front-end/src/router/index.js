import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: About
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/home',
    name: 'homeview',
    component: Home 
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
