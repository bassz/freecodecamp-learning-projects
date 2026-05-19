let count = 0;
function cardCounter(card) {
  if(card >= 2 && card <= 6) {
    return "work!";
  } else if(card >=7 && card <=9) {
    return "work2!";
  } else if(card == 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    return "work3!";
  }
}

console.log(cardCounter(""));