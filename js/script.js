/* JS */
const gridContainer = document.querySelector('.gridContainer');
const ereser = document.querySelector('.erese');
let color = "black";

createGrid(10);

ereser.addEventListener('click', ereseGrid);

function createGrid(gridNumber){
    let gridSize = gridNumber * gridNumber;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    for(i = 1; i<=gridSize; i++){
        let grids = document.createElement('div');
        grids.style.border = '1px solid';
        gridContainer.insertAdjacentElement('afterbegin', grids);
    }
    let allGrid = gridContainer.querySelectorAll('div');
    allGrid.forEach(oneGrid => oneGrid.addEventListener('mouseover', colorGrid));
}
function colorGrid(){
    this.style.backgroundColor = color;
}
function changeColorVar(e){
    color = "black"
}
function ereseGrid(){
    let allGrid = gridContainer.querySelectorAll('div');
    allGrid.forEach(oneGrid => oneGrid.style.backgroundColor= "white");
}