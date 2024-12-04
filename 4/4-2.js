import input from "./4.input.js";

let total = 0;

for (let alfa = 1; alfa < input.length - 1; alfa++) {
  let line = input[alfa];
  for (let bravo = 1; bravo < line.length - 1; bravo++) {
    let letter = line[bravo];
    if (letter === "A") {
      if (
        input[alfa - 1][bravo - 1] === "M" &&
        input[alfa + 1][bravo - 1] === "M" &&
        input[alfa - 1][bravo + 1] === "S" &&
        input[alfa + 1][bravo + 1] === "S"
      ) {
        total++;
      } else if (
        input[alfa - 1][bravo - 1] === "M" &&
        input[alfa + 1][bravo - 1] === "S" &&
        input[alfa - 1][bravo + 1] === "M" &&
        input[alfa + 1][bravo + 1] === "S"
      ) {
        total++;
      } else if (
        input[alfa - 1][bravo - 1] === "S" &&
        input[alfa + 1][bravo - 1] === "M" &&
        input[alfa - 1][bravo + 1] === "S" &&
        input[alfa + 1][bravo + 1] === "M"
      ) {
        total++;
      } else if (
        input[alfa - 1][bravo - 1] === "S" &&
        input[alfa + 1][bravo - 1] === "S" &&
        input[alfa - 1][bravo + 1] === "M" &&
        input[alfa + 1][bravo + 1] === "M"
      ) {
        total++;
      }
    }
  }
}

console.log(total);
