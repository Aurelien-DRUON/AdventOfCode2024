import input from "./3.input.js";

const muls = input.match(/mul\(\d{1,3},\d{1,3}\)/g);

let total = 0;

muls.forEach((mul) => {
  const numbers = mul.match(/\d+/g);
  total += numbers[0] * numbers[1];
});

console.log(total);
