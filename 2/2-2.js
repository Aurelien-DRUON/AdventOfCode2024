import input from "./2.input.js";

let total = 0;

for (let alfa = 0; alfa < input.length; alfa++) {
  let check = input[alfa].length;
  for (let bravo = 0; bravo < input[alfa].length; bravo++) {
    let testLine = [...input[alfa]];
    testLine.splice(bravo, 1);
    if (testLine[0] > testLine[1]) {
      for (let charlie = 0; charlie < testLine.length - 1; charlie++) {
        if (
          testLine[charlie] <= testLine[charlie + 1] ||
          testLine[charlie] > testLine[charlie + 1] + 3
        ) {
          check -= 1;
          break;
        }
      }
    } else if (testLine[0] < testLine[1]) {
      for (let charlie = 0; charlie < testLine.length - 1; charlie++) {
        if (
          testLine[charlie] >= testLine[charlie + 1] ||
          testLine[charlie] < testLine[charlie + 1] - 3
        ) {
          check -= 1;
          break;
        }
      }
    } else if (testLine[0] === testLine[1]) {
      check -= 1;
    }
    console.log(check);
  }

  total += check === 0 ? 0 : 1;
}

console.log(total);
