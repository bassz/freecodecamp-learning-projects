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
    console.log(`Randomly selected lunch: ${lunches[Math.floor(Math.random() * lunches.length)]}`);
    return lunches
  }
}
getRandomLunch(["Sushi", "Pizza", "Burger"]);

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
    return lunches;
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
    return lunches;
  }
}

showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);