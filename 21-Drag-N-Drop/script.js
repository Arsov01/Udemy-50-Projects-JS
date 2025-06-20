const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
  this.classList.add("hold"); // Changed from className +=
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  console.log("drag end");
  this.classList.remove("hold", "invisible"); // Clean up classes
  this.classList.add("fill");
}

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}

function dragEnter(e) {
  e.preventDefault();
  console.log("drag enter");
  this.classList.add("hovered"); // Fixed: Added proper classList method
}

function dragLeave() {
  console.log("drag leave");
  this.classList.remove("hovered"); // Only remove hovered class
}

function dragDrop() {
  console.log("drag drop");
  this.classList.remove("hovered");
  this.append(fill);
}
