import input from "./4.input.js";

let total = 0;

for (let alfa = 0; alfa < input.length; alfa++) {
  let line = input[alfa];
  for (let bravo = 0; bravo < line.length; bravo++) {
    let letter = line[bravo];
    if (letter === "X") {
      let xCoords = [alfa, bravo];
      for (
        let charlie = alfa === 0 ? 0 : -1;
        charlie <= (alfa === input.length - 1 ? 0 : 1);
        charlie++
      ) {
        for (
          let delta = bravo === 0 ? 0 : -1;
          delta <= (bravo === line.length - 1 ? 0 : 1);
          delta++
        ) {
          if (input[xCoords[0] + charlie][xCoords[1] + delta] === "M") {
            let mCoords = [xCoords[0] + charlie, xCoords[1] + delta];
            if (
              mCoords[0] + charlie < input.length &&
              mCoords[0] + charlie >= 0 &&
              mCoords[1] + delta < line.length &&
              mCoords[1] + delta >= 0
            ) {
              if (input[mCoords[0] + charlie][mCoords[1] + delta] === "A") {
                let aCoords = [mCoords[0] + charlie, mCoords[1] + delta];
                if (
                  aCoords[0] + charlie < input.length &&
                  aCoords[0] + charlie >= 0 &&
                  aCoords[1] + delta < line.length &&
                  aCoords[1] + delta >= 0
                ) {
                  if (input[aCoords[0] + charlie][aCoords[1] + delta] === "S") {
                    total++;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(total);
