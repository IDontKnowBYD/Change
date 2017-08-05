var example1 = new Vue({
	el: '#example-1',
	data: {
		items: [
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
});

var example2 = new Vue({
	el: '#example-2',
	data: {
		parentMessage: 'Parent',
		items: [
			{message: 'Foo'},
			{message: 'Bar'}
		]
	}
});

var repeat = new Vue({
	el: '#repeat-object',
	data: {
		object: {
			firstName: 'John',
      		lastName: 'Doe',
      		age: 30
		}
	}
});