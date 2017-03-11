import Vue from 'vue'
import Router from 'vue-router'
import BarChart from '@/examples/BarChart'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: BarChart }
  ]
})
