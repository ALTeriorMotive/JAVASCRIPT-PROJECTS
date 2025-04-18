var words = "Here's a string "; /* Variables for use with the typeof operator and type coersion */
var number = 359124;

document.write(typeof number); /* Use of typeof operator */
document.write("<br>"); /* Line break for visual clarity */
document.write(words + number); /* Type coersion */
document.write("<br><br>"); /* Line break for visual clarity */
document.write(1.8E308); /* Displays infinity */
document.write("<br>"); /* Line break for visual clarity */
document.write(-1E309); /* Displays negative infinity */
document.write("<br><br>"); /* Line break for visual clarity */
document.write(1 > 1); /* Comparison statement false output */
document.write("<br>"); /* Line break for visual clarity */
document.write(1 < 2); /* Comparison statement true output */

console.log(1+2); /* console.log math operation */
console.log(2 == 2); /* == operator true output */
console.log(2 == 1); /* == operator false output */

var num = 1; /* Variables for use with the === operator */
var num1 = 1;
var string = "1";
var text = "one";

console.log("vvv === comparisons vvv") /* Specifies what the following outputs relate to in the console */
console.log(num === num1); /* === operator true output */
console.log(num === text); /* === operator false output */
console.log(num === string); /* === operator false output */
console.log(string === text); /* === operator false output */

console.log("vvv AND OR operators vvv"); /* Specifies what the following outputs relate to in the console */
console.log(1 == 1 && 2 == 2); /* AND operator true output */
console.log(1 == 1 && 1 == 2); /* AND operator false output */
console.log(1 == 1 || 1 == 2); /* OR operator true output */
console.log(1 == 3 || 1 == 2); /* OR operator false output */

console.log("vvv NOT operator vvv"); /* Specifies what the following outputs relate to in the console */
console.log(!(1 == 2)); /* NOT operator true output */
console.log(!(1 == 1)); /* NOT operator false output */