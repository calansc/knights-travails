import css from "./style.css";
import Knight from "./Chess-Knight.svg";

// let knightPos = [0, 0];
//knight can make up to 8 possible moves:
//[+2,+1], [+1,+2], [+2,-1], [+1,-2], [-1,-2], [-2,-1], [-2,+1], [-1,+2]
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
let startPoint = null;
let endPoint = null;

// function buildHtmlBoard() {
//   let bw = "whiteSquare";
//   let squares = document.getElementsByClassName("squares");
//   for (let i = 0; i < arrayX.length; i++) {
//     let x = arrayX[i];
//     if (x & 1) {
//       bw = "whiteSquare";
//     } else bw = "blackSquare";
//     for (let j = 0; j < arrayY.length; j++) {
//       let y = arrayY[j];
//       let square = document.createElement("div");
//       square.classList.add(bw);
//       if (bw === "whiteSquare") {
//         bw = "blackSquare";
//       } else bw = "whiteSquare";
//       let squareId = alphaX[x] + y;
//       square.setAttribute("id", squareId);
//       square.addEventListener(
//         "click",
//         function () {
//           boardListener(squareId);
//         },
//         false
//       );
//       squares[0].appendChild(square);
//     }
//   }
// }
function buildHtmlBoard() {
  let bw = "whiteSquare";
  let squares = document.getElementsByClassName("squares");
  for (let i = 0; i < arrayY.length; i++) {
    let y = arrayY[i];
    if (y & 1) {
      bw = "whiteSquare";
    } else bw = "blackSquare";
    for (let j = 0; j < arrayX.length; j++) {
      let x = arrayX[j];
      let square = document.createElement("div");
      square.classList.add(bw);
      if (bw === "whiteSquare") {
        bw = "blackSquare";
      } else bw = "whiteSquare";
      let squareId = alphaX[x] + y;
      square.setAttribute("id", squareId);
      square.addEventListener(
        "click",
        function () {
          boardListener(squareId);
        },
        false
      );
      squares[0].appendChild(square);
    }
  }
  let row = document.getElementsByClassName("row");
  for (let i = 0; i < alphaX.length; i++) {
    let rowHeader = document.createElement("div");
    rowHeader.classList.add("rowHeader");
    rowHeader.textContent = alphaX[i];
    row[0].appendChild(rowHeader);
  }
  let column = document.getElementsByClassName("column");
  for (let i = 0; i < arrayY.length; i++) {
    let columnHeader = document.createElement("div");
    columnHeader.classList.add("columnHeader");
    columnHeader.textContent = arrayY[i];
    column[0].appendChild(columnHeader);
  }
}
buildHtmlBoard();

function boardListener(squareId) {
  if (startPoint === null) {
    boardReset();
    startPoint = squareId;
    let start = document.getElementsByClassName("start");
    start[0].textContent = "Starting Point: " + startPoint;
    let startImage = document.getElementById(startPoint);
    let image = new Image();
    image.src = Knight;
    startImage.appendChild(image);
    // console.log("start" + squareId);
  } else if (endPoint === null) {
    endPoint = squareId;
    let end = document.getElementsByClassName("end");
    end[0].textContent = "Ending Point: " + endPoint;
    // console.log("end" + endPoint);
    let results = findShortestPath(boardGraph, startPoint, endPoint);
    // console.log(results);
    let endImage = document.getElementById(endPoint);
    let image = new Image();
    image.src = Knight;
    endImage.appendChild(image);
    startPoint = null;
    endPoint = null;
    let distance = document.getElementsByClassName("distance");
    let path = document.getElementsByClassName("path");
    distance[0].textContent = "Distance: " + results.distance + " moves";
    path[0].textContent = "Path: " + results.path;
    knightBoardDisplay(results);
  }
}

function knightBoardDisplay(results) {
  // console.log(results.path);
  for (let i = 1; i < results.path.length - 1; i++) {
    // console.log(results.path[i]);
    let square = document.getElementById(results.path[i]);
    square.textContent = i;
    square.classList.add("visited");
  }
}

function boardReset() {
  let whiteSquare = document.getElementsByClassName("whiteSquare");
  let blackSquare = document.getElementsByClassName("blackSquare");
  for (let i = 0; i < whiteSquare.length; i++) {
    whiteSquare.item(i).textContent = "";
    whiteSquare.item(i).classList.remove("visited");
  }
  for (let i = 0; i < blackSquare.length; i++) {
    blackSquare.item(i).textContent = "";
    blackSquare.item(i).classList.remove("visited");
  }
  let end = document.getElementsByClassName("end");
  let distance = document.getElementsByClassName("distance");
  let path = document.getElementsByClassName("path");
  end[0].textContent = "Ending Point:";
  distance[0].textContent = "Distance:";
  path[0].textContent = "Path";
}
// get reference to squares class, appendChildren.
// assign each square a black/white class to alternate
// assign each square an id with its coordinate A0,A1,B0 etc

// function component() {
//   const element = document.createElement("div");
//   element.innerText = "Knights Travails Project";
//   const description = document.createElement("div");
//   description.innerText =
//     "Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.";
//   element.appendChild(description);
//   return element;
// }

// document.body.appendChild(component());

function buildBoardGraph() {
  // each loop adds to object
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

// let graph = {
//   start: { A: 5, B: 2 },
//   A: { start: 1, C: 4, D: 2 },
//   B: { A: 8, D: 7 },
//   C: { D: 6, finish: 3 },
//   D: { finish: 1 },
//   finish: {},
// };

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
console.log(findShortestPath(boardGraph, "A0", "A1"));
console.log(findShortestPath(boardGraph, "A7", "H0"));

function knightMoves(start, end) {}
