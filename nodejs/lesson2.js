// Write a programe to findout product execpt self
// [ 1, 2, 3, 4, 5 ]
// [ 400 , 300 , 250, ]

let question = [2, 4, 6, 5, 10]
let answer = [];
let temp = 1;
let position = 0;
let flash = 0;

for (flash = 0; flash < question.length; flash++) {
     for (count = 0; count < question.length; count++) {
          if (position == count) {
          }
          else {
               temp = temp * question[count]
          }
     }
     answer.push(temp);
     position = position + 1;
     temp = 1;
}
console.log(answer)
// for (count = 0; count < question.length; count++) {
//      if (position == count) {

//      }
//      else {
//           temp = temp * question[count];
//      }
// }
// answer.push(temp);
// console.log(answer);
// if (position == 1) {

// }
// else {
//      temp = temp * question[1];
// }

// if (position == 2) {

// }
// else {
//      temp = temp * question[2];
// }
// if (position == 1) {

// }
// else {
//      temp = temp * question[1]
// }

// if (position == 2) {

// }
// else {
//      temp = temp * question[2];
// }

// if (position == 3) {
// }
// else {
//      temp = temp * question[3];
// }