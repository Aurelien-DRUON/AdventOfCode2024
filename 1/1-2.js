import input from "./1.input.js";

const list1 = input[0];
const list2 = input[1];

let total = 0;

list1.forEach((entry) => {
  total += entry * list2.filter((item) => item === entry).length;
});

console.log(total);
