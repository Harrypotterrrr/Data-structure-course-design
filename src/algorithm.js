const infinite = 0x3f3f3f3f;
var father = [];

function Edge(v, w, u = undefined) {
    this.u = u;
    this.v = v;
    this.w = w;
}

function Graph(n) {
    this.inital(n);
    this.n_v = n;
    this.n_e = 0;
    this.adjList = [];
    for (let i = 1; i <= this.n_v; i++) {
        this.adjList[i] = [];
    }
}

Graph.prototype.inital = function(n){
    this.n_v = n;
    this.n_e = 0;
    this.adjList = [];
    for (let i = 1; i <= this.n_v; i++) {
        this.adjList[i] = [];
    }
};

Graph.prototype.addEdge = function (u, v, w) {
    var edge1 = new Edge(v, w);
    var edge2 = new Edge(u, w);

    this.adjList[u].push(edge1);
    this.adjList[v].push(edge2);
    this.n_e++;
};

var outputList = [];
Graph.prototype.showAdjList = function () {

    var text;
    for (var i = 1; i <= this.n_v; i++) {
        for (var j = 0; j < this.adjList[i].length; j++){
            text = i + " -> " + this.adjList[i][j].v;
            outputList.push(text);
            console.log(i + " -> " + this.adjList[i][j].v);
        }
    }
};

var shortestList=[];
Graph.prototype.Dijkstra = function (start) {

    let vis = [];
    let dis = [];
    let Q = [];
    for (let i = 1; i <= this.n_v; i++) {
        vis[i] = false;
        dis[i] = infinite;
    }
    dis[start] = 0;
    Q.push(new Edge(start, 0));
    while (Q.length !== 0) {
        let tmp_max = -infinite, tmp_index;
        for (let i = 0; i < Q.length; i++) {
            if (tmp_max < Q[i].w) {
                tmp_index = i;
                tmp_max = Q[i].w;
            }
        }
        var cur = Q[tmp_index];
        Q.splice(tmp_index, 1);
        for (let i = 0; i < this.adjList[cur.v].length; i++) {
            var nv = this.adjList[cur.v][i].v;
            var nw = this.adjList[cur.v][i].w;
            if (vis[nv] === false && dis[nv] > dis[cur.v] + nw) {
                dis[nv] = dis[cur.v] + nw;
                Q.push(new Edge(nv, dis[nv]));
            }
        }
    }

    console.log(start + "'s shortest distance:");

    for (let i = 1; i <= this.n_v; i++) {
        shortestList.push("to: " + i + ", cost:" + dis[i]);
        console.log("to: " + i + ", cost:" + dis[i]);
    }
};

var prim_list = [];
Graph.prototype.Prim = function () {

    prim_list.push(1);
    var adjVex = [];
    var lowcost = [];

    const start = 1;
    for (let i = 1; i <= this.n_v; i++) {
        lowcost[i] = infinite;
    }
    for (let i = 0; i < this.adjList[start].length; i++) {
        lowcost[this.adjList[start][i].v] = this.adjList[start][i].w;
    }
    for(let i=2;i<=graph.n_v;i++)
        adjVex[i] = start;

    lowcost[start] = 0;

    for (let i = 1; i < this.n_v; i++) {
        let tmp_min = infinite, tmp_index;
        for (let j = 1; j <= this.n_v; j++) {
            if (lowcost[j] !== 0 && tmp_min >= lowcost[j]) {
                tmp_min = lowcost[j];
                tmp_index = j;
            }
        }

        console.log("next vertex: " + tmp_index);


        lowcost[tmp_index] = 0;

        for (let j = 0; j < this.adjList[tmp_index].length; j++) {
            let nw = this.adjList[tmp_index][j];
            if (nw.w < lowcost[nw.v]) {
                adjVex[nw.v] = tmp_index;
                lowcost[nw.v] = nw.w;
            }
        }
    }
    for(let i=0;i<adjVex.length;i++)
        if(adjVex[i] !== undefined && adjVex[i] !== null)
            prim_list.push({from:i, to:adjVex[i]});

};

// Union-Found
function Find(x) {
    if (father[x] === -1)
        return x;
    father[x] = Find(father[x]);
    return father[x];
}

function Union(a,b){
    var t1 = Find(a);
    var t2 = Find(b);
    if(t1 !== t2)
        father[t1] = t2;
}

var kru_list = [];
Graph.prototype.Kruskal = function () {
    for (let i = 0; i <= this.n_v; i++)
        father[i] = -1;

    var edgeList = [];
    for (let i = 1; i <= this.n_v; i++) {
        for (let j = 0; j < this.adjList[i].length; j++) {
            edgeList.push(this.adjList[i][j]);
            edgeList[edgeList.length-1].u = i;
        }
    }
    edgeList.sort(function cmp(a, b) {
        if (a.w > b.w)
            return 1;
        return -1;
    });

    // console.log(edgeList);
    for (let i = 1, j = 0; i < this.n_v && j < edgeList.length; i++) {
        while(Find(edgeList[j].u) === Find(edgeList[j].v))
            j++;
        Union(edgeList[j].u,edgeList[j].v);
        var nw = edgeList[j];
        console.log("add edge",nw.u+" and "+nw.v);
        kru_list.push({from:nw.u,to:nw.v});
    }
};

//深度优先搜索
function dfs(v) {
    this.marked[v] = true;
    //输出一下
    if (this.adjList[v] !== undefined) {
        console.log("已访问 ：" + v);
    }
    for (var i = 0; i < this.adjList[v].length; i++) {
        var w = this.adjList[v][i];
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v !== undefined) {
            console.log("已访问 ：" + v);
        }
        for (let k in this.adjList[v]) {
            var w = this.adjList[v][k];
            if (!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

