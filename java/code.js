// loop addUP

let array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

// reduce addUP

const numbers = [1, 2, 3, 4];

function sum1( c, n) {
  return c + n;
}

let sum2 = numbers.reduce(sum1);
console.log(sum2);


