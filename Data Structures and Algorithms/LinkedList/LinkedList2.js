function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = previous;
}

function LList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findLast = findLast;
	this.disReverse = disReverse;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.display();

function remove(item) {
	var currNode = this.find(item);
	if(!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

function findLast() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		currNode = currNode.next;
	}
	return currNode;
}

function disReverse() {
	var currNode = this.findLast();
	while(!(currNode.previous == null)) {
		print(currNode.element);
		currNode = currNode.previous;
	}
}