
//variable for getting the different boxes in the grid and different rows

var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');
var box9 = document.getElementById('9');



//=====================================

// creating the grid

var grid = [[box1, box2, box3], [box4, box5, box6], [box7, box8, box9]];

var currentPlayer=1
$('.table').on('click',function(event) {
  if (currentPlayer===1) {
    $('body').css("background-color","blue");
    event.target.textContent='X';
    currentPlayer=0;
  } else {
    $('body').css("background-color","red");
    event.target.textContent='O';
    currentPlayer=1;
  }
  checkWhoWin();
})



//========================================
function checkWhoWin() {
  if(combinationRow1()) {
    console.log('ciao');
  }
  combinationRow2();
  combinationRow3();
  combinationColumn1();
  combinationColumn2();
  combinationColumn3();
  combinationDiagonal1();
  combinationDiagonal2();
}




//function to see all the possible  combinations for winning the game and token variables declaration


function combinationRow1(){
  if (box1.textContent === 'X' && box2.textContent ==='X' && box3.textContent=='X'){
    console.log(' A player  wins');
    return true;
  } else {
    return false;
  }
}
combinationRow1()
function combinationRow2(){
  if (box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML){
    console.log(' A player  wins');
  }
}

function combinationRow3(){
  if (box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML){
    console.log(' A player  wins');
  }
}

function combinationColumn1(){
  if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
    console.log(' A player  wins');
  }
}
function combinationColumn2(){
  if (box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
    console.log(' A player  wins');
  }
}
function combinationColumn3(){
  if (box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML){
    console.log(' A player  wins');
  }
}
function combinationDiagonal1(){
  if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box9.innerHTML){
    console.log(' A player  wins');
  }
}

function combinationDiagonal2(){
  if (box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML){
    console.log(' A player  wins');
  }
}

//=================================================================

//create a function for the draw

function draw(){
  if (combinationRow1 !==true && combinationRow2 !==true &&
    combinationRow3 !==true && combinationColumn1!==true &&
    combinationColumn2!==true && combinationColumn3!==true &&
    combinationDiagonal1!==true &&
    combinationDiagonal2!==true ) {
      console.log('it is a draw');
    }
}










//=========================================


//========================================
