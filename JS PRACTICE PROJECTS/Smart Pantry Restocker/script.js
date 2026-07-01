const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const result = [];
  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const item = {
      sku: parts[0],
      name: parts[1],
      qty: Number(parts[2]),
      expires: parts[3],
      zone: parts[4] ?? "general",
    };
    const isDuplicate = result.some(x => x.sku === item.sku);
    if (!isDuplicate) {
      result.push(item);
    }
  }
  return result;
}

console.log(parseShipment(rawData));