function Vertex(label, wasvisitde) {
	this.label = label;
	this.wasvisitde = wasvisitde;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.marked = [];
	this.addEdge = addEdge;
	this.showString = showString;
}

function addEdge(v ,w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		putstr(i + "->");
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefinded)
				putstr(this.adj[i][j] + ' ');
		}
		print();
	}
}

function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined)
		print("Visited Vertex: " + v);
	for each(var w in this.adj[v]) {
		if (!this.marked[w]) {
			this.dfs(w);
		}
	}
}

function bfs(s) {
	var queue = [];
	this.marked[s] =true;
	queue.push(s);
	while (queue.length > 0) {
		var v = queue.shift();
		if (this.adj[v] != undefined) {
			print("Visited Vertex:" + v);
		}
		for each(var w in this.adj[v]) {
			if(!this.marked[w]) {
				this.marked[w] = true;
				queue.push(w);
			}
		}
	}
}


