const gridContainer = document.querySelector(".grid-container");
const gridButton = document.querySelector(".grid-button");
let defaultBlockSize = 32;
let newSize = null;
let defaultGridSize = 16;
let newGridSize = null;


function fillGridContainer() {
  if (newSize !== null) {
    defaultBlockSize = newSize;
  }

  if (newGridSize !== null) {
    defaultGridSize = newGridSize;
  }

  for (let i = 1; i <= defaultGridSize**2; i++) {
    let gridBlock = document.createElement("div");
    gridBlock.style.height = defaultBlockSize + "px";
    gridBlock.style.width = defaultBlockSize + "px";
    gridBlock.style.margin = "0px";
    gridBlock.classList.add("block");
    gridContainer.appendChild(gridBlock);
  }
}

function addListeners() {
  let gridBlocks = document.querySelectorAll(".block");
  gridBlocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      block.style.backgroundColor = "black";
    });
  });
}

function restartGrid() {
  gridButton.addEventListener("click", () => {
    let inputSize = parseInt(prompt("Insert grid size number. Maximum 100"));
    if (Number.isInteger(inputSize) && (inputSize) <= 100) {
      let currentGrid = document.querySelectorAll(".block");
      currentGrid.forEach((block) => {
        gridContainer.removeChild(block);
      })
      console.log(inputSize);
      newGridSize = inputSize;
      newSize = (512/newGridSize);
      fillGridContainer();
      addListeners();
    } else if (inputSize > 100) {
      alert('dont use number above 100!');
    }
  });
}



fillGridContainer();
addListeners();
restartGrid();
