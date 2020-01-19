import Vue from 'vue'
import Router from 'vue-router'

// const Home = () => require('@/views/home')

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:(resolve) => {
        require(['@/views/home'], resolve)
      }
    }
  ]
})
