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
var currentPlayer = pl1;
var round = 0;
var game1 = 0;
var game2 = 0;
var yesBtn = document.getElementById('yes');
var noBtn = document.getElementById('no');
var pl1Games = document.getElementsByTagName('span')[0];
var pl2Games = document.getElementsByTagName('span')[1] ;


// function to increment the number of winnings

var winningGames = function(num1,num2) {
   return num1+num2;
}
var calculateWins1 = function(){
  var num1 = game1;
  var num2 = 1;
  game1 = winningGames(num1,num2);
  pl1Games.textContent = game1;
}
var calculateWins2 = function(){
  var num1 = game2;
  var num2 = 1;
  game2 = winningGames(num1,num2);
  pl2Games.textContent = game2;
}


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
  if (currentPlayer === pl1) {
    $(event.target).css("background-color","blue");
    event.target.textContent = pl1;
  } else {
    $(event.target).css("background-color","red");
    event.target.textContent = pl2;
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
    displayMessage(' ')
})
// function in case of no winning
function draw() {
  if (round === 9) {
    displayMessage ("It's a draw. Try AGAIN");
  }
}
// funtion to inspect who wins
function checkWhoWin(insideValue) {
  if( combinationRow1(insideValue ) || combinationRow2(insideValue) ||
      combinationRow3(insideValue)|| combinationColumn1(insideValue) ||
      combinationColumn2(insideValue) || combinationColumn3(insideValue) ||
      combinationDiagonal1(insideValue) || combinationDiagonal2(insideValue) ) {
        if(currentPlayer === pl1){
          displayMessage(player1 + ' wins. New Game ?');
          calculateWins1();
        } else if (currentPlayer === pl2) {
          displayMessage(player2 + ' wins. New Game ?');
          calculateWins2();
        }
    $('.table').off('click');

    return true;
  } else {
    draw();
  }
  return false;
}

// functions for all the possible combinations
function combinationRow1(insideValue){
  if (grid[0][0].textContent === insideValue && grid[0][1].textContent === insideValue && grid[0][2].textContent === insideValue){
    return true;
  }
  return false;
}

function combinationRow2(insideValue){
  if (grid[1][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[1][2].textContent === insideValue ){
    return true;
  }
  return false;
}

function combinationRow3(insideValue){
  if (grid[2][0].textContent === insideValue &&  grid[2][1].textContent === insideValue && grid[2][2].textContent === insideValue ){
    return true;
  }
  return false;
}

function combinationColumn1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][0].textContent === insideValue && grid[2][0].textContent === insideValue ){
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationColumn2(insideValue){
  if (grid[0][1].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][1].textContent === insideValue ){
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationColumn3(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][2].textContent === insideValue && grid[2][2].textContent === insideValue ){
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationDiagonal1(insideValue){
  if (grid[0][0].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][2].textContent === insideValue){
    displayMessage(currentPlayer + ' wins. New Game ?');
    return true;
  }
  return false;
}

function combinationDiagonal2(insideValue){
  if (grid[0][2].textContent === insideValue &&  grid[1][1].textContent === insideValue && grid[2][0].textContent === insideValue ){
    return true;
  }
  return false;
}
