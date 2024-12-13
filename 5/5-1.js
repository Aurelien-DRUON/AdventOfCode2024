import { input1, input2 } from "./5.input.js";

let total = 0;

for (let alfa = 0; alfa < input2.length; alfa++) {
  let isOk = true;
  let line = input2[alfa];
  for (let bravo = 0; bravo < line.length; bravo++) {
    let follows = [];
    for (let charlie = 0; charlie < input1.length; charlie++) {
      let item = input1[charlie];
      if (item[0] === line[bravo]) {
        follows.push(item[1]);
      }
    }
    for (let delta = bravo + 1; delta < line.length; delta++) {
      if (!follows.includes(line[delta])) {
        isOk = false;
      }
    }
  }
  if (isOk === true) {
    total += line[Math.floor(line.length / 2)];
  }
}

console.log(total);
