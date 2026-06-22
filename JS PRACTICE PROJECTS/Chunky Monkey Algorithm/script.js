function chunkArrayInGroups(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/*
ตัวอย่างอื่น:
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// → [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
// → [[0, 1, 2], [3, 4, 5], [6]]
*/