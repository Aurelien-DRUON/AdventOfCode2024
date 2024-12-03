import input from "./3.input.js";

const dos = [...input.matchAll(/do\(\)/g)];
const donts = [...input.matchAll(/don't\(\)/g)];
const muls = [...input.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)];

const dosIndexes = dos.map((huh) => huh.index);
const dontsIndexes = donts.map((huh) => huh.index);

let total = 0;

muls.forEach((mul) => {
  const inferiorDosIndexes = dosIndexes.filter((dos) => dos < mul.index);
  const inferiorDontsIndexes = dontsIndexes.filter(
    (donts) => donts < mul.index
  );
  if (
    (inferiorDosIndexes[inferiorDosIndexes.length - 1] | 0) >=
    (inferiorDontsIndexes[inferiorDontsIndexes.length - 1] | 0)
  ) {
    console.log("do");
    total += mul[1] * mul[2];
  } else {
    console.log("dont");
  }
});

console.log(dosIndexes, dontsIndexes, total);
