// Write a programe to findout product execpt self
// [ 1, 2, 3, 4, 5 ]
// [ 400 , 300 , 250, ]

let question = [2, 4, 6, 5, 10]
let answer = []
let count = 0;
for (count = 1; count < question.length; count++) {

     let product = question[count];
     product = product * question[count]
     // count--;
     console.log(product);

}