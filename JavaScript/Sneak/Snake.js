(function (window) {
  //Snake构造函数
  function Snake(obj) {
    obj = obj || {};
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.headColor = obj.headcolor || 'red';
    this.bodyColor = obj.bodyColor || 'green';
    this.body = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
    this.direction = 'right';
  }
  //Snake render
  Snake.prototype.render = function (box) {
    for (var i = 0; i < this.body.length; i++) {
      var span = document.createElement('span');

      span.style.width = this.width + 'px';
      span.style.height = this.height + 'px';

      span.style.position = 'absolute';
      span.style.left = this.body[i].x * this.width + 'px';
      span.style.top = this.body[i].y * this.height + 'px';

      if (i == 0) {
        span.style.backgroundColor = this.headColor;
      } else {
        span.style.backgroundColor = this.bodyColor;
      }
      box.appendChild(span);
    }
  }

  //Snake move
  Snake.prototype.move = function (box, food) {

    var obj = {
      x: this.body[0].x,
      y: this.body[0].y
    };

    switch(this.direction){
      case 'right':
        obj.x = this.body[0].x + 1;
        break;
      case 'left':
        obj.x = this.body[0].x - 1;
        break;
      case 'up':
        obj.y = this.body[0].y - 1;
        break;
      case 'down':
        obj.y = this.body[0].y + 1;
        break;
    }

    this.body.unshift(obj);

    if (food.x == this.body[0].x && food.y == this.body[0].y){
      var div = box.querySelector('div');
      box.removeChild(div);
      food.render(box);
    }else{
      this.body.pop();
    }

    var spans = document.querySelectorAll('span');
    for (var i = 0; i < spans.length; i++) {
      box.removeChild(spans[i]);
    }

    this.render(box);
  }

  //Snake isDead
  Snake.prototype.isDead = function (box) {
    var head = this.body[0];
    if (head.x < 0 || head.x > box.offsetWidth / this.width - 1 || head.y < 0 || head.y > box.offsetWidth / this.width - 1) {
      alert('GG');
      return true;
    }

    for (var i = 4; i < snake.body.length; i++) {
      if (head.x == snake.body[i].x && head.y == snake.body[i].y) {
        alert('GG');
        return true;
      }
    }
    return false;
  }
  
  window.Snake = Snake;
})(window)