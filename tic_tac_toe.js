
//variable for getting the different boxes in the grid and different rows

var box0 = document.getElementById('0');
var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');

var grid = [[box0, box1, box2], [box3, box4, box5], [box6, box7, box8]];
var player1 = 'X';
var player2 = 'O';
var currentPlayer= 'X';
var round= 0;

// var combinations = [[box0, box1, box2], [box3, box4, box5], [box6, box7, box8],
//  [box0, box3, box6], [box1, box4, box7],
//                     [box2, box5, box8], [box0, box4, box8], [box2, box4, box6]];

var displayMessage = function(message) {
    $( '.message' ).html(message);
  };

$('.table').on('click',function(event) {
  // console.log($(event.target))
  if($(event.target).text() !== '') {
    return false;
  }

  if (currentPlayer==='X') {
    $('body').css("background-color","blue");

    event.target.textContent='X';
    currentPlayer='O';
    }
    else {
    $('body').css("background-color","red");
    event.target.textContent='O';
    currentPlayer='X';
  }
  round++;
  checkWhoWin('X');
  checkWhoWin('O');

})

function NewGame() {
  if (round === 9) {
    displayMessage ("It's a draw. Try AGAIN");
    console.log ('draw');
  } else if (checkWhoWin('X')) {
    displayMessage (currentPlayer + ' wins. New Game ?');
    console.log ('wiiiiiin');
  }
}


function checkWhoWin(insideValue) {
  combinationRow1(insideValue);
  combinationRow2(insideValue);
  combinationRow3(insideValue);
  combinationColumn1(insideValue);
  combinationColumn2(insideValue);
  combinationColumn3(insideValue);
  combinationColumn3(insideValue);
  combinationDiagonal1(insideValue);
  combinationDiagonal2(insideValue);
  // if (round===9){
  //     displayMessage('DRAW, wanna play again?')
  // }

}
checkWhoWin();

function combinationRow1(insideValue){
  if (grid[0][0].textContent === insideValue && grid[0][1].textContent === insideValue && grid[0][2].textContent === insideValue){
    console.log(grid[0][0].textContent  +  ' wins');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}


function combinationRow2(insideValue){
  if (grid[1][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[1][2].textContent === insideValue ){
    console.log(grid[1][0].textContent + ' wins');
  }
}

function combinationRow3(insideValue){
  if (grid[2][0].textContent === insideValue &&  grid[2][1].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[2][0].textContent + ' wins');
  }
}

function combinationColumn1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][0].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][0].textContent +  + ' wins');
  }
}
function combinationColumn2(insideValue){
  if (grid[0][1].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][1].textContent === insideValue ){
    console.log(grid[0][1].textContent  + ' wins');
  }
}
function combinationColumn3(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][2].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[0][2].textContent + ' wins');
  }
}
function combinationDiagonal1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][2].textContent === insideValue){
    console.log(grid[0][0].textContent  + ' wins');
  }
}

function combinationDiagonal2(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][2].textContent  + ' wins');
  }
}
