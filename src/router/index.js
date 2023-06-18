import Vue from 'vue'
import VueRouter from 'vue-router'
import Task from '@/components/Task/Task'
import Maps from '@/components/Maps/Maps'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task',
    component: Task
  },
  {
    path: '/maps',
    name: 'maps',
    component: Maps
  }
]

const router = new VueRouter({
  routes
})

export default router
