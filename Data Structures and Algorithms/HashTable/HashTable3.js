function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.showDistro = showDistro;
	this.put = put;
	//this.get = get;
}

function simpleHsah(data) {
	var total = 0;
	for (var i = 0; i < data.length; i++) {
		total += total.cartCodeAt(i);
	}
	return total % this.table.length;
}

function betterHash(string) {
	const H = 37;
	var total = 0;
	for (var i = 0; i < string.length; ++i) {
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if (total < 0) {
		total += this.table.length-1;
	}
	return parseInt(total);
}

function put(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function showDistro() {
	var n = 0;
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i][0] != undefined) {
			print(i + ":" + this.table[i]);
		}
	}
}

function buildChains() {
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = new Array();
	}
}

var hTable = new HashTable();
hTable.buildChains();