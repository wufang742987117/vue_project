// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
import './common/common.css'
import './common/common'

//按需引入mint-ui组件
import { Navbar, TabItem, TabContainer, TabContainerItem, Radio, Checklist } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Radio.name, Radio);
Vue.component(Checklist.name, Checklist);



Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
