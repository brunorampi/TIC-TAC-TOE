
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

var displayMessage = function( message ) {
    $( '.message' ).html( message );
  };

// var AllowedMove = function() {
//     round = 0;
//     if ( $('.grid') === ' ') {
//       return true;
//     } else {
//       displayMessage('Please choose an empty box');
//     }
// }

// AllowedMove();


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


function checkWhoWin(insideValue) {
  combinationRow1(insideValue);
  // combinationRow2();
  // combinationRow3();
  // combinationColumn1();
  // combinationColumn2();
  // combinationColumn3();
  // combinationColumn3();
  // combinationDiagonal1();
  // combinationDiagonal2();
  // if (round===9){
  //     displayMessage('DRAW, wanna play again?')
  // }

}
checkWhoWin();

function combinationRow1(insideValue){
  if (grid[0][0].textContent === insideValue && grid[0][1].textContent === insideValue && grid[0][2].textContent === insideValue){
    console.log(grid[0][0].textContent  +  ' wins');
  }
}


// function combinationRow2(insideValue){
//   if (box3.innerHTML ===  box4.innerHTML  && box4.innerHTML === box5.innerHTML ){
//     console.log('Player ' + box3.textContent + ' wins');
//   }
// }
//
// function combinationRow3(){
//   if (box6.innerHTML === box7.innerHTML  && box7.innerHTML === box8.innerHTML ){
//     console.log('Player ' + box6.textContent + ' wins');
//   }
// }
//
// function combinationColumn1(){
//   if (box0.innerHTML === box3.innerHTML  && box3.innerHTML === box6.innerHTML ){
//     console.log('Player ' + box0.textContent + ' wins');
//   }
// }
// function combinationColumn2(){
//   if (box1.innerHTML === box4.innerHTML  && box4.innerHTML === box7.innerHTML ){
//     console.log('Player ' + box1.textContent + ' wins');
//   }
// }
// function combinationColumn3(){
//   if (box2.innerHTML === box5.innerHTML  && box5.innerHTML === box8.innerHTML ){
//     console.log('Player ' + box2.textContent + ' wins');
//   }
// }
// function combinationDiagonal1(){
//   if (box0.innerHTML === 'X' && box4.innerHTML ==='X' && box8.innerHTML === 'X'){
//     console.log('Player ' + box0.textContent + ' wins');
//   }
// }
//
// function combinationDiagonal2(){
//   if (box2.innerHTML === box4.innerHTML  && box4.innerHTML === box6.innerHTML ){
//     console.log('Player ' + box2.textContent + ' wins');
//   }
// }
