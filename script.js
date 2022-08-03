let names = ["wale", "Joke", "Dami", "jOseph"];

console.log(names.length);

for (let i = 0; i < names.length; i++) {
  console.log(`${i} : ${names[i]}`);
}

//Given an array of Number

let numbers = [30, 5, 5, 10, 90];
let sum = 50;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

if (sum % 2 == 1) {
  console.log(`${sum} is odd number`);
} else {
  console.log(`${sum} is not and odd number`);
}

let odd = [];
let even = [];

function GetOodd() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
      odd.push(i);
    } else {
      even.push(i);
    }
  }
}

GetOodd();

console.log(odd);
console.log(even);
