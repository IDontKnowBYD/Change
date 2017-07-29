function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}else if(element.attachEvent){
		elment.attachEvent('on'+evnet,listener);
	}else{
		element['on'+event] = listener;
	}
}

function each(array,fn){
	for(var i = 0;i < array.length; i++){
		fn(array[i],i);
	}
}

window.onload = function(){
	var container = document.getElementById('container');
	var buttonList = document.getElementsByTagName('input');

	var queue = {
		str: [],

		leftPush: function(num){
			this.str.unshift(num);
			this.paint();
		},

		rightPush: function(num){
			this.str.push(num);
			this.paint();
		},

		isEmpty: function(){
			reurn (this.str.length === 0);
		},

		leftPop: function(){
			if (!this.isEmpty()) {
				this.str.shift();
				this.paint();
			}else{
				alert('error');
			}
		},

		rightPop: function(){
			if (!this.isEmpty()) {
				this.str.pop();
				this.paint();
			}else{
				alert('error');
			}
		},

		paint: function(){
			var list = '';
			each(this.str,function(item){
				list += "<div style = \'height:"+parseInt(item)+"px\'></div>";
			});
			container.innerHTML = list;
			if (this.str.length>5) {
				alert('too much number');
			}
			addDivDelEvent();
		},

		delectID: function(id){
			this.str.splice(id,1);
			this.paint();
		}
		
	};

	function addDivDelEvent(){
		for(var i = 0; i < container.childNodes.length; i++){
			addEvent(container.childNodes[i],'click',function(num){
				return function(){
					return queue.delectID(num);
				};
			}(i));
		}
	}
	function numberSort(){
		var num = queue.str.length;
		setInterval(function(){
			
			if (num>1) {
				for(var i = 0; i < queue.str.length; i++){
					if (queue.str[i]>queue.str[i+1]) {
						var t = queue.str[i];
						queue.str[i] = queue.str[i+1];
						queue.str[i+1] = t;
						queue.paint();
					}
				}
			}else{
				clearInterval();
				
			}
			num--;
		},100);
	}

	addEvent(buttonList[1],"click",function(){
		var input = buttonList[0].value;
		if ((/^[0-9]+$/).test(input)&&(parseInt(input) >= 10)&&(parseInt(input) <= 100)) {
			queue.leftPush(input);
		}else{
			alert('Please enter an interger!');
		}
	});
	addEvent(buttonList[2],"click",function(){
		var input = buttonList[0].value;
		if ((/^[0-9]+$/).test(input)&&(parseInt(input) >= 10)&&(parseInt(input) <= 100)) {
			queue.rightPush(input);
		}else{
			alert("Please enter an interger!");
		}
	});
	addEvent(buttonList[3], "click", function(){queue.leftPop();});
	addEvent(buttonList[4], "click", function(){queue.rightPop();});
	addEvent(buttonList[5], "click", function(){numberSort();});
};