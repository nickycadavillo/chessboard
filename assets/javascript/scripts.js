
//first create a 2d array board with the pieces set up
//assign each string piece to an icon
//create an array with all the moves that pieces should go to in order
//when you press play, you should iterate through that array
//when you iterate through that array,
//replace the "from" rank and file to the new "to" rank and file

// SOURCED: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_a_two-dimensional_array
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]; //end board array

// console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));

var pieces = {
   "R" : "&#9820;",
   "N" : "&#9822;",
   "B" : "&#9821",
   "Q" : "&#9819",
   "K" : "&#9818",
   "P" : "&#9823",
   "r" : "&#9814",
   "n" : "&#9816",
   "b" : "&#9815",
   "q" : "&#9813",
   "k" : "&#9812",
   "p" : "&#9817",
   " " : " "
 };

 //http://stackoverflow.com/questions/4156101/javascript-push-array-values-into-another-array


var moves = [
    {from: {rank: 3, file: 6},
    to: {rank: 3, file: 4}
    },

    {from: {rank: 6, file: 0},
    to: {rank: 5, file: 2}
    },

    {from: {rank: 2, file: 6},
    to: {rank: 2, file: 4}
    },

    {from: {rank: 4, file: 1},
    to: {rank: 4, file: 2}
    },

    {from: {rank: 6, file: 6},
    to: {rank: 6, file: 5}
    },

    {from: {rank: 3, file: 1},
    to: {rank: 3, file: 3}
    },

    {from: {rank: 5, file: 7},
    to: {rank: 6, file: 6}
    },

    {from: {rank: 5, file: 0},
    to: {rank: 4, file: 1}
    },

    {from: {rank: 6, file: 7},
    to: {rank: 5, file: 5}
    }

  ]; end var moves array

var moves = 0;

function start (){

}




$('.fa-play-circle').on('click', function(){


  // function play (to, from) {
  //      board[to.rank][to.file] = board[from.rank][from.file];
  //      board[from.rank][from.file] = ' ';
}
