function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+event,listner);
	}else{
		element["on"+event] = listener;
	}
}

function each(array,fun){
	for (var i = 0; i < array.length; i++) {
		fun(array[i],i);
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
			return (this.str.length === 0);
		},

		leftPop: function(){
			if (!this.isEmpty()) {
				this.str.shift();
				this.paint();
			}else{
				alert("error");
			}
		},

		rightPop: function(){
			if (!this.isEmpty()) {
				this.str.pop();
				this.paint();
			}else{
				alert("error");
			}
		},

		paint: function(){
			var list = "";
			each(this.str,function(item){
				list +="<div style = \'height:"+parseInt(item)+"px\''></div>";
			});
			container.innerHTML = list;
			if (this.str.length > 5) {
				alert("too much number!");
			}
			addDiviDelEvent();
		},

		delectID: function(id){
			this.str.splice(id,1);
			this.paint();
		}
	};

	function addDiviDelEvent(){
		for (var i = 0; i < queue.str.length; i++) {
			addEvent(queue.str[i],"click",function(num){
				return function(){
					return queue.delectId(num);
				};
			}(i));
		}
	}
	function numSort(){
		var i = 0;
		var count = 0;
		setInterval(function(){
			if (count === queue.str.length ){
				clearInterval();
			}
			if (i === queue.str.length-1-count) {
				i = 0;
				count++;
			}
			if (queue.str[i]>queue.str[i+1]) {
				var t = queue.str[i];
				queue.str[i] = queue.str[i+1];
				queue.str[i+1] = t;
				queue.paint();
			}
			i++;
		},100);
	}


	addEvent(buttonList[1], "click", function() {
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)&&(parseInt(input) >= 10)&&(parseInt(input) <= 100)) {
            queue.leftPush(input);
        }
        else {
            alert("Please enter an right interger!");
        }
    });
    addEvent(buttonList[2], "click", function() {
        var input = buttonList[0].value;
        if ((/^[0-9]+$/).test(input)&&(parseInt(input) >= 10)&&(parseInt(input) <= 100)) {
        	
            queue.rightPush(input);
        }
        else {
            alert("Please enter an right interger!");
        }
    });
    addEvent(buttonList[3], "click", function(){queue.leftPop();});
    addEvent(buttonList[4], "click", function(){queue.rightPop();});
    addEvent(buttonList[5], "click", function(){numSort();});

};