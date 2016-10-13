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
var pl1 = 'X';
var pl2 = 'O';
var currentPlayer= 'X';
var round = 0;
var game = 0;

var player1 = prompt("Player 1 please enter your name");

if (player1 != null) {
    document.getElementById("player1Name").innerHTML = player1;
}

var player2 = prompt("Player 2 please enter your name");

if (player2 != null) {
    document.getElementById("player2Name").innerHTML = player2;
}

// var combinations = [[box0, box1, box2], [box3, box4, box5], [box6, box7, box8],
//  [box0, box3, box6], [box1, box4, box7],
//                     [box2, box5, box8], [box0, box4, box8], [box2, box4, box6]];

var displayMessage = function(message) {
    $( '.winningMessage' ).html(message);
  };


$('.table').on('click',function(event) {

  if($(event.target).text() !== '') {
    return false;
    alert('Please, play in an empty box');
  }

  if (currentPlayer===pl1) {
    $(event.target).css("background-color","blue");
    event.target.textContent=pl1;
    //currentPlayer=pl2;
    }
    else {
    $(event.target).css("background-color","red");
    event.target.textContent=pl2;
    //currentPlayer=pl1;
  }
  round++;
  if (checkWhoWin(currentPlayer)) {
    restart();
  }

  if (currentPlayer===pl1) {
    currentPlayer=pl2;
  }else {
    currentPlayer=pl1;
  }

  //checkWhoWin('O');
  draw();
})

function restart(){
  for (var i=0; i < grid.length; i++){
    var currentRow = grid[i];
    for (var j=0; j < currentRow.length; j++) {
      var box = currentRow[j];
      box.innerHTML='';
    }
  }
}

function draw() {
  if (round === 9) {
    displayMessage ("It's a draw. Try AGAIN");
    console.log ('draw');
  }
  var drMessage = function(message) {
      $( '.drawingMessage' ).html('No winner, play again?');
    };
}

function checkWhoWin(insideValue) {
  if(combinationRow1(insideValue )) {
    return true;
  }

  combinationRow2(insideValue)
  combinationRow3(insideValue);
  combinationColumn1(insideValue);
  combinationColumn2(insideValue);
  combinationColumn3(insideValue);
  combinationColumn3(insideValue);
  combinationDiagonal1(insideValue);
  combinationDiagonal2(insideValue);
  return false;
}



function combinationRow1(insideValue){
  if (grid[0][0].textContent === insideValue && grid[0][1].textContent === insideValue && grid[0][2].textContent === insideValue){
    console.log(grid[0][0].textContent  +  ' wins');
    displayMessage(currentPlayer + ' wins. New Game ?');
    $('.table').off('click');
    return true;


  }
  return false;
}


function combinationRow2(insideValue){
  if (grid[1][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[1][2].textContent === insideValue ){
    console.log(grid[1][0].textContent + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');

  }
}



function combinationRow3(insideValue){
  if (grid[2][0].textContent === insideValue &&  grid[2][1].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[2][0].textContent + ' wins');
    displayMessage(currentPlayer + ' wins. New Game ?');

  }
}

function combinationColumn1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][0].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][0].textContent + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}
function combinationColumn2(insideValue){
  if (grid[0][1].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][1].textContent === insideValue ){
    console.log(grid[0][1].textContent  + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}
function combinationColumn3(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][2].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[0][2].textContent + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}
function combinationDiagonal1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][2].textContent === insideValue){
    console.log(grid[0][0].textContent  + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}

function combinationDiagonal2(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][2].textContent  + ' wins');
    $('.table').off('click');
    displayMessage('ohohohoohoh');
    displayMessage(currentPlayer + ' wins. New Game ?');
  }
}
