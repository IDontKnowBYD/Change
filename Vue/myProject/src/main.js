import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const First = {template: '<div><h2>我是第 1 个子页面</h2></div>'}
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/first',
			component: First
		},
		{
			path: '/second',
			component: secondcomponent
		}]
})
new Vue({
	el: '#app',
  router: router,
  render: h => h(App)
})
