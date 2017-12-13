function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.hasNext;
	this.hasPrev;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function remove(element) {
	var foundAt = this.find(element);

	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function find(element) {
	for(var i = 0; i < this.dataStore.length; ++i){
		if(this.dataStore[i] === element){
			return i;
		}
	}
	return -1;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}


function insert(element, after) {
	var inertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataSrote;
	this.dataSrote.length = 0;
	this.listSize = this.pos = 0;
}

function contains(element) {
	for(var i = 0; i < this.dataSrote.length; ++i){
		if(this.dataSrote[i] === element){
			return true;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.dataSrote.length-1;
}

function prev() {
	--this.pos;
}

function next() {
	++this.pos;
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function hasNext() {
	return this.pos<this.listSize;
}

function hasPrev() {
	return this.pos >= 0;
}

var movies = read('films.txt').split("\n");

var movieList = new List();
for(var i = 0; i < movies.length; ++i){
	movieList.append(movies[i]);
}

function displayList(list){
	for(list.front(); list.currPos() < list.length(); list.next()) {
		if(list.getElement() instanceof Customer) {
			print(list.getElement()["name"] + "," + list.getElement()["movies"]);
		}else{
			print(list.getElement());
		}
	}
}

var customers = new List();

function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function checkout(name, movie, movieList, customerList) {
	if(movieList.contains(movie)){
		var c = new Customer(name, movie);
		customerList.append(c);
		movieList.remove(movie);
	}else{
		print(movie + "is not available,");
	}
}

