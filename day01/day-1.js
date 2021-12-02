const fs = require("fs");
const fileName = "./day-1-data.txt";

// Part 1
function increaseCount(input) {
  let isIncrease = 0;
  let tempNum = 0;
  for (let num of input) {
    if (num > tempNum) {
      if (tempNum === 0) {
        tempNum = num;
      }
      if (tempNum > 0) {
        isIncrease += 1;
        tempNum = num;
      }
    } else {
      tempNum = num;
    }
  }
  return isIncrease;
}

// Part 2
function windowCount(input, windows) {
  let increaseCount = 0;
  for (let i = 0; i < input.length - windows; i++) {
    if (
      parseInt(input[i]) + parseInt(input[i + 1]) + parseInt(input[i + 2]) <
      parseInt(input[i + 1]) + parseInt(input[i + 2]) + parseInt(input[i + 3])
    ) {
      increaseCount++;
    }
  }
  return increaseCount;
}

try {
  const fileData = fs.readFileSync(fileName, "UTF-8");
  const depthArray = fileData.split(/\r?\n/);

  // console.log(increaseCount(depthArray));
  console.log(windowCount(depthArray, 3));
} catch (error) {
  console.error(error);
}
