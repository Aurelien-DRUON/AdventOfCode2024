import input from "./1.input.js";

const list1 = [];
const list2 = [];

for (let alfa = 0; alfa < input.length; alfa++) {
  if (alfa == 0 || alfa % 2 == 0) {
    list1.push(input[alfa]);
  } else {
    list2.push(input[alfa]);
  }
}

let total = 0;

list1.forEach((entry) => {
  total += entry * list2.filter((item) => item === entry).length;
});

console.log(total);
