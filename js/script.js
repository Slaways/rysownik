/* JS */
const gridContainer = document.querySelector('.gridContainer');
const ereser = document.querySelector('.erese');
const setnew = document.querySelector('.newGrid');
let color = "black";

createGrid(10); //Początkowa siatka

ereser.addEventListener('click', ereseGrid);
setnew.addEventListener('click', newGrid);

//Tworzenie siatki na podstawie podanej liczby (default: 10), dodanie listenerow i przypisanie funkcji kolorowania
function createGrid(gridNumber){
    let gridSize = gridNumber * gridNumber;
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    for(i = 1; i<=gridSize; i++){
        let grids = document.createElement('div');
        gridContainer.insertAdjacentElement('afterbegin', grids);
    }
    let allGrid = gridContainer.querySelectorAll('div');
    allGrid.forEach(oneGrid => oneGrid.addEventListener('mouseover', colorGrid));
}

//funkcja kolorowania siatki
function colorGrid(){
    this.style.backgroundColor = color;
}

//czyszczenie siatki
function ereseGrid(){
    let allGrid = gridContainer.querySelectorAll('div');
    allGrid.forEach(oneGrid => oneGrid.style.backgroundColor= "white");
}

//wartość własna siatki oraz czyszczenie
function newGrid(){
    let gridSize = prompt("Podaj liczbę określającą wielkość szkicownika (od 1 do 100)");
    if((gridSize<1) || (gridSize>100)){
        alert("Podałeś niewłaściwą liczbę, spróbuj ponownie")
    }else{
        ereseGrid();
        createGrid(gridSize);
    }
}