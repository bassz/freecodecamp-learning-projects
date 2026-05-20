function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

/* confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain") should return false */