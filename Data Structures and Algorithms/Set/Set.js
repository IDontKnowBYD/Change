function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
}

function add(data) {
	if (this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}else {
		return false;
	}
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos, 1);
		return true;
	}else{
		return false;
	}
}

function show() {
	return this.dataStore;
}

function contains(data) {
	if(this.dataStore.indexOf(data) > -1) {
		return true;
	}else{
		return false;
	}
}

function union(set) {
	var template = new Set();
	for(var i = 0; i < this.dataStore.length; i++) {
		template.add(this.dataStore[i]);
	}
	for(var i = 0; i < set.length; i++){
		if(!template.contains(set.dataStore[i])) {
			template.dataStore.push(set.dataStore[i]);
		}
	}
}

function intersect(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i){
		if(set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}

function size() {
	return this.dataStore.length;
}

function subset(set) {
	if(this.size() > set.size()) {
		return false;
	}
	else{
		for each(var member in this.dataStore) {
			if(!set.contains(member)) {
				return false
			}
		}
	}
	return true;
}

function difference(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; ++i){
		if(!set.contains(this.dataStore[i])) {
			tempSet.add(this.dataStore[i]);
		}
	} 
	return tempSet;
}