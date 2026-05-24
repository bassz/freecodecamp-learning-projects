let lunches = [];
function addLunchToEnd(lunches, str) {
  lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
}

addLunchToEnd(["Pizza", "Tacos"], "Burger");

function addLunchToStart(lunches, str) {
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  } else {
    console.log(`${lunches.pop()} removed from the end of the lunch menu.`);
    return lunches;
  }
}


const result = removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(result); //อันนี้เป็นการลองใช้ array.pop() ที่จะคืนค่า lunches หลังจากตัดตัวหลังสุดออก

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  } else {
    console.log(`${lunches.shift()} removed from the start of the lunch menu.`);
    return lunches;
  }
}
removeFirstLunch(["Sushi", "Pizza", "Burger"]);

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return lunches;
  } else {
    console.log(`Randomly selected lunch: ${lunches}`);
    return lunches
  }
}


const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

