/*Vue.component('my-component',{
	template: '<div> A custom component!'
})

new Vue({
	el: '#example'
})*/

new Vue({
	el: '#example',
	components: {
		'my-component': {
			template: '<div>A custom component!</div>'
		}
	}
})