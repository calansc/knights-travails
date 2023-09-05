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

let arrayX = [0, 1, 2, 3, 4, 5, 6, 7];
let arrayY = [0, 1, 2, 3, 4, 5, 6, 7];
let knightPos = [0, 0];
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
buildBoardArray();
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
currentEdgeList(knightPos);
knightPos = [2, 1];
currentEdgeList(knightPos);

// Searches tree for shortest route from start(x,y) coordinates to
// end(x,y) coordinates
function knightMoves(start, end) {}
