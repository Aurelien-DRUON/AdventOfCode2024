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

const sortedList1 = [];
const sortedList2 = [];

sortedList1.push(...list1.sort((a, b) => a - b));
sortedList2.push(...list2.sort((a, b) => a - b));

let distance = 0;

for (let bravo = 0; bravo < sortedList1.length; bravo++) {
  if (sortedList1[bravo] > sortedList2[bravo]) {
    distance += sortedList1[bravo] - sortedList2[bravo];
  } else if (sortedList2[bravo] > sortedList1[bravo]) {
    distance += sortedList2[bravo] - sortedList1[bravo];
  }
}

console.log(distance);
