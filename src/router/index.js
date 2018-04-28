import Vue from 'vue'
import Router from 'vue-router'

/* 主页面 */
const homePage = r => require.ensure([], () => r(require('../page/homePage')), 'homePage');
const addVote = r => require.ensure([], () => r(require('../page/addVote')), 'addVote');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: {
        name: 'homePage'
      }
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {keepAlive: true}
    },
    {
      path: '/addVote',
      name: 'addVote',
      component: addVote,
      meta: {keepAlive: true}
    },
  ]
})
