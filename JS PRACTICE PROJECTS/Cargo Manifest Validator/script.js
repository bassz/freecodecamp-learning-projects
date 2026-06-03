function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return { ...manifest, weight: manifest.weight * 0.45, unit: "kg"};
  }
  return { ...manifest};
}

/* function normalizeUnits() แปลงหน่วยปอนด์เป็นกิโลโดยการ n*0.45 และเปลี่ยนหน่วย lb เป็น kg โดยที่ไม่ mutate ตัว source manifest โดยการใช้ ...manifest เรียกว่า spread
------------------
const manifest1 = { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true };

console.log(normalizeUnits(manifest1));
-----------------
*/

function validateManifest(manifest) {
  const errors = {}

  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (manifest.containerId <= 0) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

const manifest1 = { containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" };

console.log(validateManifest(manifest1));