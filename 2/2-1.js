import input from "./2.input.js";

let total = 0;

for (let alfa = 0; alfa < input.length; alfa++) {
  let check = 1;
  if (input[alfa][0] > input[alfa][1]) {
    for (let bravo = 0; bravo < input[alfa].length - 1; bravo++) {
      if (
        input[alfa][bravo] <= input[alfa][bravo + 1] ||
        input[alfa][bravo] > input[alfa][bravo + 1] + 3
      ) {
        check = 0;
      }
    }
  } else if (input[alfa][0] < input[alfa][1]) {
    for (let bravo = 0; bravo < input[alfa].length - 1; bravo++) {
      if (
        input[alfa][bravo] >= input[alfa][bravo + 1] ||
        input[alfa][bravo] < input[alfa][bravo + 1] - 3
      ) {
        check = 0;
      }
    }
  } else if (input[alfa][0] === input[alfa][1]) {
    check = 0;
  }
  total += check;
  console.log(input[alfa], check === 0 ? "false" : "true");
}

console.log(total);
