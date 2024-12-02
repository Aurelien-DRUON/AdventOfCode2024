import fs from "fs";

const filePath = "1.input.txt";
const fileContent = fs.readFileSync(filePath, "utf-8");

const column1 = [];
const column2 = [];

fileContent
  .trim()
  .split("\n")
  .forEach((line) => {
    const [num1, num2] = line.split("   ");
    column1.push(num1);
    column2.push(num2);
  });

const input = [column1, column2];

export default input;
