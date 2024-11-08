// explore the dataset
console.log(stateData.ny); // ny data

// name: 'New York',
// 		abbr: 'NY',
// 		capitol: 'Albany',
// 		pop: '19,651,127',
// 		statehood: '1788',
// 		mammal: 'Beaver',
// 		bird: 'Bluebird',
// 		tree: 'Sugar Maple',
// 		flower: 'Rose',
// 		nickname: 'Empire State'
//get just one piece of ny data
console.log(stateData.ny.tree) //Sugar Maple
// get select menu
let selectMenu = document.getElementById('state-list');
console.log(selectMenu.value); //tx
// get the current state from the dataset
console.log(stateData[selectMenu.value]);
let selectedState = stateData[selectMenu.value];
console.log(selectedState.bird);
console.log(selectedState.mammal);
console.log(selectedState.flower);
console.log(selectedState.tree);

//select menu has an option array 
console.log(selectMenu.options.length);
// console.log(selectMenu.options[43].text);
selectMenu.addEventListener('change', displayStateInfo);
//get the DOM elements that hold the state data
let infoMammalP = document.getElementById('info-mammal');
let infoBirdP = document.getElementById('info-bird');
let infoFlowerP = document.getElementById('info-flower');
let infoTreeP = document.getElementById('info-tree');
let infoCapitolP = document.getElementById('info-capitol');
let infoPopulationP = document.getElementById('info-population');
let infoAbbrP = document.getElementById('info-abbr');
let infoStatehoodP = document.getElementById('info-statehood');
let infoNicknameP = document.getElementById('info-nickname');
let infoNameFigCap = document.getElementById('info-name');

function displayStateInfo() {
    let selectedState = stateData[this.value];
infoMammalP.textContent = selectedState.mammal;
infoBirdP.textContent = selectedState.bird;
infoFlowerP.textContent = selectedState.flower;
infoTreeP.textContent = selectedState.tree;
infoCapitolP.textContent = selectedState.capitol;
infoPopulationP.textContent = selectedState.pop;
infoAbbrP.textContent = selectedState.abbr;
infoStatehoodP.textContent = selectedState.statehood;
infoNicknameP.textContent = selectedState.nickname;

let infoPic = document.getElementById('info-pic');
infoPic.src= 'img/' + selectedState.abbr + '.jpg';
infoNameFigCap.textContent = selectedState.name;
}
