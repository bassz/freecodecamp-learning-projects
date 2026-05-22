const lunches = [];
function addLunchToEnd(lunches, str) {
  lunches.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, str) {
  lunches.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  lunches.pop();
  if (lunches = "") {
    return console.log("No lunches to remove.");
  } else {
    return console.log(`${lunches} removed from the end of the lunch menu.`);
  }
}

function removeFirstLunch(lunches) {
  lunches.shift();
  if (lunches.shift() === undefined) {
    return console.log("No lunches to remove.");
  } else {
    return console.log(`${lunches} remremoved from the start of the lunch menu.`);
  }
}
