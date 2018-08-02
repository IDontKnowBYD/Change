(function(window){
  //food构造函数
  function Food(obj) {
    obj = obj || {};
    this.width = obj.width || 20;
    this.height = obj.height || 20;
    this.backgroundColor = obj.color || 'blue';
    this.x = 0;
    this.y = 0;
  }
  //food render
  Food.prototype.render = function (box) {
    var div = document.createElement('div');

    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.backgroundColor;

    this.x = parseInt(Math.random() * (box.offsetWidth / this.width));
    this.y = parseInt(Math.random() * (box.offsetHeight / this.height));

    div.style.position = 'absolute';
    div.style.top = this.y * this.width + 'px';
    div.style.left = this.x * this.height + 'px';

    box.appendChild(div);
  }

  window.Food = Food;
})(window);