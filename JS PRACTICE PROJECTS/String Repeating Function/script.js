function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result = str+result;
  }
  return result;
}

console.log(repeatStringNumTimes("*", 8));