import input from "./1.input.js";

const list1 = input[0];
const list2 = input[1];

const sortedList1 = list1.sort((a, b) => a - b);
const sortedList2 = list2.sort((a, b) => a - b);

let distance = 0;

for (let bravo = 0; bravo < sortedList1.length; bravo++) {
  if (sortedList1[bravo] > sortedList2[bravo]) {
    distance += sortedList1[bravo] - sortedList2[bravo];
  } else if (sortedList2[bravo] > sortedList1[bravo]) {
    distance += sortedList2[bravo] - sortedList1[bravo];
  }
}

console.log(distance);
