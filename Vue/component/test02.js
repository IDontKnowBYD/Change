/*Vue.component('my-component',{
	template: '<div> A custom component!'
})

new Vue({
	el: '#example'
})*/
Vue.component('my-com', {
	props: {
		value: {
			type: Number
		}
	},
	template: '<div>{{ currentValue}}<button @click="handleClick">+1</button></div>',
	data () {
		return {
			currentValue: 0
		}
	},
	methods: {
		handleClick () {
			this.currentValue ++;
			this.$emit('input',this.currentValue);
		}
	}
});
new Vue({
	el: '#example',
	data: {
		value: 1
	}
})