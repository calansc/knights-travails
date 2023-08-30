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
