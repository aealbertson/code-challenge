// Write a JavaScript function to generate an array.
// The elements in the array should be integers
// in a range between two integers
// given as arguments.

//  makeArray(-2, 4);
// >> [-4, -3, -2, -1, 0, 1, 2, 3, 4]


var x;
var y;
var array = [];


function makeArray(x, y){

while(x <= y){
  array.push(x);
  x = x + 1;
  }
 console.log(array);
}


makeArray(-4, 4);
