function fearNotLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const currentIndex = letters.indexOf(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== letters[currentIndex+i]) {
      return letters[currentIndex+i];
    }
  }
}

console.log(fearNotLetter("bcdf"));