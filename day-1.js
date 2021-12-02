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

