import fs from "fs";

const filePath = "2.input.txt";
const fileContent = fs.readFileSync(filePath, "utf-8");

const input = fileContent
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

export default input;
