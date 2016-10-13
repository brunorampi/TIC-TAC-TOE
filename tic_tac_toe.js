//Variable decalration

//Variales for the grid
var box0 = document.getElementById('0');
var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');

//grid construction
var grid = [[box0, box1, box2], [box3, box4, box5], [box6, box7, box8]];

//Variables for players, rounds, games and button
var pl1 = 'X';
var pl2 = 'O';
var currentPlayer= 'X';
var round = 0;
var game = 0;
var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById('no');

// propmt to ask players' names
var player1 = prompt("Player 1 please enter your name");
if (player1 != null) {
    document.getElementById("player1Name").innerHTML = player1;
}

var player2 = prompt("Player 2 please enter your name");
if (player2 != null) {
    document.getElementById("player2Name").innerHTML = player2;
}

//function that call a message, such as winning, alert or drawing

var displayMessage = function(message) {
    $( '.message' ).html(message);
  };
// diplay a message if a player try to play in a filled box
function roundOfPlay(){
  if($(event.target).text() !== '') {
    displayMessage ("Please, play in a blank box");
    return false;
  }

// part of the switching players function
  if (currentPlayer===pl1) {
    $(event.target).css("background-color","blue");
    event.target.textContent=pl1;
    }
    else {
    $(event.target).css("background-color","red");
    event.target.textContent=pl2;
  }
  round++;

  // check if a player wins
    checkWhoWin(currentPlayer)
  if (currentPlayer===pl1) {
    currentPlayer=pl2;
  }else {
    currentPlayer=pl1;
  }
  
}

// add an Event Listener when a player clicks in one box.
$('.table').on('click',roundOfPlay)

yesBtn.addEventListener('click', function(){
  for (var i=0; i < grid.length; i++){
    var currentRow = grid[i];
    for (var j=0; j < currentRow.length; j++) {
      var box = currentRow[j];
      box.innerHTML='';
    }
  }
    $('td').css("background-color","white");
    round = 0;
    currentPlayer = 'X';
    $('.table').on('click',roundOfPlay)
})
// function in case of no winning
function draw() {
  if (round === 9) {
    displayMessage ("It's a draw. Try AGAIN");
    console.log ('draw');
  }
}
// funtion to inspect who wins
function checkWhoWin(insideValue) {
  if( combinationRow1(insideValue ) || combinationRow2(insideValue) ||
      combinationRow3(insideValue)|| combinationColumn1(insideValue) ||
      combinationColumn2(insideValue) || combinationColumn3(insideValue) ||
      combinationDiagonal1(insideValue) || combinationDiagonal2(insideValue) ) {
    return true;
  } else {
    draw();
  }
  return false;
}

// functions for all the possible combinations
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
    return true;
  }
  return false;
}

function combinationRow3(insideValue){
  if (grid[2][0].textContent === insideValue &&  grid[2][1].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[2][0].textContent + ' wins');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationColumn1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][0].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][0].textContent + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationColumn2(insideValue){
  if (grid[0][1].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][1].textContent === insideValue ){
    console.log(grid[0][1].textContent  + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationColumn3(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][2].textContent === insideValue && grid[2][2].textContent === insideValue ){
    console.log(grid[0][2].textContent + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationDiagonal1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][2].textContent === insideValue){
    console.log(grid[0][0].textContent  + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationDiagonal2(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][0].textContent === insideValue ){
    console.log(grid[0][2].textContent  + ' wins');
    $('.table').off('click');
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}
