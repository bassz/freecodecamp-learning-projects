function booWho(value) {
  if (typeof value === "boolean") {
    return true;
  }
  return false
}

console.log(booWho(1));