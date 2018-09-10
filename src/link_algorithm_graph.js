var blinks = [
    {source: 0, target: 1, rela: 6},
    {source: 0, target: 2, rela: 1},
    {source: 0, target: 3, rela: 5},
    {source: 2, target: 4, rela: 6},
    {source: 2, target: 5, rela: 4},
    {source: 1, target: 4, rela: 3},
    {source: 3, target: 5, rela: 2},
    {source: 4, target: 5, rela: 6},
    {source: 2, target: 1, rela: 5},
    {source: 2, target: 3, rela: 5},
];

var bnodes = [
    {name: "1"},
    {name: "2"},
    {name: "3"},
    {name: "4"},
    {name: "5"},
    {name: "6"}
];

var graph = new Graph(6);
graph.addEdge(1, 2, 6);
graph.addEdge(1, 4, 5);
graph.addEdge(1, 3, 1);
graph.addEdge(2, 3, 5);
graph.addEdge(2, 5, 3);
graph.addEdge(3, 4, 5);
graph.addEdge(3, 6, 4);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 6, 2);
graph.addEdge(5, 6, 6);

nodes = bnodes;
links = blinks;

function AddEdge(u, v, w) {

    graph.addEdge(u, v, w);
    var dic_u = {name: u.toString()};
    var dic_v = {name: v.toString()};

    // if (nodes.indexOf(dic_u) === -1)
    //     nodes.push(dic_u);
    // if (nodes.indexOf(dic_v) === -1)
    //     nodes.push(dic_v);

    var dic_edge = {source: u, target: v, rela: w};
    if (links.indexOf(dic_edge) === -1)
        links.push(dic_edge);
}

function GetValue() {
    // for(let i=0;i<blinks.length;i++)
    //     links.push(blinks[i]);
    d3.select('svg').remove();
    update();
}

function GetAdjList() {
    graph.showAdjList();
    var writeList = outputList.slice();
    outputList = [];
    var t = document.getElementById("outputArea");
    t.innerHTML = "";
    for (let i of writeList) {
        t.innerHTML += i + "\n";
    }
}

function GetDijkstra() {
    var text = document.getElementById("textId").value;
    if(text === "" || text === undefined || text === null){
        alert("please input a number!");
        return;
    }
    if(parseInt(text)>6 || parseInt(text)<1){
        alert("please input a number range from 1 to 6");
        return;
    }

    graph.Dijkstra(parseInt(text));
    var shor_list = shortestList.slice();
    shortestList = [];

    var t = document.getElementById("outputArea");
    t.innerHTML = "";
    for (let i of shor_list) {
        t.innerHTML += i + "\n";
    }

}

function GetPrim() {
    graph.Prim();
    var highlight_list = prim_list.slice();
    prim_list = [];
    highlightLine(highlight_list);
}

function GetKruskal() {
    graph.Kruskal();
    var highlight_list = kru_list.slice();
    kru_list = [];
    highlightLine(highlight_list);
}




