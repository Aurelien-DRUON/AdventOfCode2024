import fs from "fs";

const filePath = "5.input.txt";
const fileContent = fs.readFileSync(filePath, "utf-8");

const input = fileContent
  .trim()
  .split("\n")
  .map((line) => [line]);

export const input1 = input
  .slice(
    0,
    input.findIndex((item) => item[0] === "")
  )
  .map((item) => item[0].split("|").map(Number));

export const input2 = input
  .slice(input.findIndex((item) => item[0] === "") + 1, input.length)
  .map((item) => item[0].split(",").map(Number));
