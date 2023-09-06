import "./style.css";
function component() {
  const element = document.createElement("div");
  element.innerText = "Knights Travails Project";
  const description = document.createElement("div");
  description.innerText =
    "Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.";
  element.appendChild(description);
  return element;
}

document.body.appendChild(component());

// let arrayX = [0, 1, 2, 3, 4, 5, 6, 7];
// let arrayY = [0, 1, 2, 3, 4, 5, 6, 7];
let knightPos = [0, 0];
//knight can make up to 8 possible moves:
//[+2,+1], [+1,+2], [+2,-1], [+1,-2], [-1,-2], [-2,-1], [-2,+1], [-1,+2]

let fullBoardArray = [];
function buildBoardArray() {
  for (let i = 0; i < 8; i++) {
    let x = arrayX[i];
    for (let j = 0; j < 8; j++) {
      let y = arrayY[j];
      let xy = [x, y];
      fullBoardArray.push(xy);
    }
  }
  // console.log(fullBoardArray);
  return fullBoardArray;
}
// buildBoardArray();
function fullEdgeList() {
  let fullEdgeList = [];
  for (let i = 0; i < 8; i++) {}
}

function currentEdgeList(currentPosition) {
  let edgeList = [];
  for (let i = 0; i < 8; i++) {
    let x = currentPosition[0] + possibleMoves[i][0];
    let y = currentPosition[1] + possibleMoves[i][1];
    let xy = [x, y];
    edgeList.push(xy);
  }
  console.log(edgeList);
  return edgeList;
}
// currentEdgeList(knightPos);
// knightPos = [2, 1];
// currentEdgeList(knightPos);

function dijkstas(start = [0, 0], end) {
  let unvisitedSet = [];
  let moveCount = 100;
  let visitedSet = [];
  unvisitedSet = currentEdgeList(start, end);
  console.log(unvisitedSet);
}
// dijkstas();
// Searches tree for shortest route from start(x,y) coordinates to
// end(x,y) coordinates
function knightMoves(start, end) {}

let possibleMoves = [
  [2, 1],
  [1, 2],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];
let arrayX = [0, 1, 2, 3, 4, 5, 6, 7];
let arrayY = [0, 1, 2, 3, 4, 5, 6, 7];
let alphaX = ["A", "B", "C", "D", "E", "F", "G", "H"];
let boardGraph = {};
let tempDict = {};

function buildBoardGraph() {
  // each loop adds too object
  // format "node: { connecting nodes }"
  // validate within 0-7
  for (let i = 0; i < arrayX.length; i++) {
    let x = arrayX[i];
    let alpha = alphaX[x];
    let alpha3;
    for (let j = 0; j < arrayY.length; j++) {
      let y = arrayY[j];
      let xy = [x, y];
      let arrayXY = [];
      for (let k = 0; k < possibleMoves.length; k++) {
        let x1 = x + possibleMoves[k][0];
        let y1 = y + possibleMoves[k][1];

        if (x1 >= 0 && 7 >= x1 && y1 >= 0 && 7 >= y1) {
          let alpha2 = alphaX[x1];
          arrayXY.push(alpha2 + y1);
          // arrayXY.push(alpha2 + y1 + ":1");
          alpha3 = alpha + y;
          tempDict = {};
          for (let l = 0; l < arrayXY.length; l++) {
            tempDict[arrayXY[l]] = 1;
            boardGraph[alpha3] = tempDict;
          }
        }
      }

      // console.log("{" + alpha + y + ": {" + arrayXY + "}}");

      // assign format: graph2 = Object.assign({A0: {C1:1,B2:1}},boardGraph)
      // alerts = Object.assign({3: {app:'helloagain_again',message:'yet another message'}}, alerts)
      // boardGraph = Object.assign({ arrayXY }, boardGraph);
      // console.log(boardGraph);
    }
  }
  // return boardGraph;
}
buildBoardGraph();
console.log(boardGraph);

let chessBoard = {
  A0: { C1: 1, B2: 1 },
  B0: { A2: 1, C2: 1, D1: 1 },
  C0: { A1: 1, B2: 1, D2: 1 },
  D0: { B1: 1, C2: 1 },
  A1: { C0: 1, C2: 1, B3: 1 },
};

// console.log(chessBoard);

// Dijkstas practice

let graph = {
  start: { A: 5, B: 2 },
  A: { start: 1, C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

function shortestDistanceNode(distances, visited) {
  let shortest = null;
  for (let node in distances) {
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
}

function findShortestPath(graph, startNode, endNode) {
  let distances = {};
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]);

  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    parents[child] = startNode;
  }

  let visited = [];

  let node = shortestDistanceNode(distances, visited);

  while (node) {
    let distance = distances[node];
    let children = graph[node];
    for (let child in children) {
      if (String(child) === String(startNode)) {
        continue;
      } else {
        let newDistance = distance + children[child];
        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = node;
        }
      }
    }
    visited.push(node);
    node = shortestDistanceNode(distances, visited);
  }
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  let results = {
    distance: distances[endNode],
    path: shortestPath,
  };
  return results;
}

// console.log(findShortestPath(graph, "start", "finish"));
// > {
//   	distance: 8
// 	path: (4) ["start", "A", "D", "finish"]
// }
// console.log(findShortestPath(graph, "A", "B"));
// > {
//   distance: 3
//   path: (3) ["A", "start", "B"]
// }
// console.log(findShortestPath(graph, "A", "start"));
// > {
// distance: 1
// path: (2) ["A", "start"]
// }
