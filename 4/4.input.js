import fs from "fs";

const filePath = "4.input.txt";
const fileContent = fs.readFileSync(filePath, "utf-8");

const input = fileContent
  .trim()
  .split("\n")
  .map((line) => line.split(""));

export default input;
