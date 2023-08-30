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
function fullEdgeList() {
  let fullEdgeList = [];
}

function currentEdgeList() {}
