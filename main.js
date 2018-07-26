//number of grids on initial load 16x16
let numberOfGrids = 16;

let gridContainer = document.querySelector('.gridContainer');

let r = Math.floor(Math.random() *255);
let g = Math.floor(Math.random() *255);
let b = Math.floor(Math.random() *255);

function addBackgroundColor(e){
	r -= 10;
	g -= 5;
	b -= 0.2;
	e.target.style.cssText = `background-color: rgb(${r},${g},${b})`;
}

function generateGrid(){
	 let gridAuto =  'auto';
for (let counter1 = 1; counter1 < numberOfGrids;counter1++){
  gridAuto += ' auto';
}

for(let counter = 1; counter <= (numberOfGrids*numberOfGrids);counter++){
	let gridBox = document.createElement('div');
	gridBox.classList.add('grid-boxes');
	gridContainer.appendChild(gridBox);
	gridBox.addEventListener('mouseover', addBackgroundColor)
}

gridContainer.style.cssText = `grid-template-columns: ${gridAuto}`;
}

function resetGrid(){
  let userInput = prompt('How many grids do you want');
  numberOfGrids = 0;
  if (userInput === '') {
  	alert('Please enter a number to generate a new grid');
  	return;
  }
  if (!Number(userInput)) {
  	alert('Enter a valid number');
  	return;
  }
  numberOfGrids = userInput;
  gridContainer.innerHTML  = '';
   r = Math.floor(Math.random() *255);
   g = Math.floor(Math.random() *255);
   b = Math.floor(Math.random() *255);
  generateGrid();
}

let btnResetGrid = document.querySelector('.btnResetGrid'); 

btnResetGrid.addEventListener('click', resetGrid);

generateGrid();