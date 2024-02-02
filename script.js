const gridContainer = document.querySelector(".grid-container");

function fillGridContainer() {
  for (let i = 1; i <= 256; i++) {
    let gridBlock = document.createElement("div");
    gridBlock.style.height = "32px";
    gridBlock.style.width = "32px";
    gridBlock.style.margin = "0px";
    gridBlock.classList.add("block");
    gridContainer.appendChild(gridBlock);
    console.log("grid block created");
  }
}

function addListeners() {
  let gridBlocks = document.querySelectorAll(".block");
  console.log(gridBlocks);
  gridBlocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'black';
    });
  });
}

fillGridContainer();
addListeners();