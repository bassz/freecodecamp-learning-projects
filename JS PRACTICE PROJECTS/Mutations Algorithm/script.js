function mutation(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase().split("");
  for (const letters of str2) {
    if (str1.includes(letters) !== true) {
      return false;
    } else {
      true;
    }
  }
  return true;
}

const test1 = "hello";

console.log(mutation(["hello", "hey"]));