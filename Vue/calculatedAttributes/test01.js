var example = new Vue({
	el: '#example',
	data: {
		message: 'Hello'
	},
	computed: {
		reversedMessage: function() {
			return this.message.split('').reverse().join('')
		}
	},
	methods: {
		reversedMessageTwo: function() {
			return this.message.split('').reverse().join('')
		}
	}
})

/*var demo = new Vue({
	el: "#demo",
	data: {
		firstName: 'Foo',
    	lastName: 'Bar',
    	fullName: 'Foo Bar'	
	},
	watch: {
    	firstName: function (val) {
     		this.fullName = val + ' ' + this.lastName
   	 	},
    	lastName: function (val) {
      		this.fullName = this.firstName + ' ' + val
   		}
 	}
})
*/
var demo = new Vue({
	el: '#demo',
	data: {
		firstName: 'Foo',
    	lastName: 'Bar',
	},
	computed: {
		fullName: {
			get: function() {
				return this.firstName + ' ' + this.lastName;
			},
			set: function(newValue){
				var names = newValue.split(' ');
				this.firstName = names[0];
				this.lastName = names[names.length - 1];
			}
		}
	}
});

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
    // ajax请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle), 参考: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为用户停止输入等待的毫秒数
      500
    )
  }
})