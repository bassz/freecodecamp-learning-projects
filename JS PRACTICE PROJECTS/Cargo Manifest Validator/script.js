function normalizeUnits(manifest) {
  if (manifest.unit === "lb") {
    return { ...manifest, weight: manifest.weight * 0.45, unit: "kg"};
  }
  return { ...manifest};
}//* function normalizeUnits() แปลงหน่วยปอนด์เป็นกิโลโดยการ n*0.45 และเปลี่ยนหน่วย lb เป็น kg โดยที่ไม่ mutate ตัว source manifest โดยการใช้ ...manifest ("..." เรียกว่า spread)

function validateManifest(manifest) {
  const errors = {};
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";
  } else if (manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }

  if (!("destination" in manifest)) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0) {
    errors.destination = "Invalid";
  }

  if (!("weight" in manifest)) {
    errors.weight = "Missing";
  } else if (manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  if (!("unit" in manifest)) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  return errors;
} //function validateManifest() คือการตรวจว่า input ต่างๆ valid หรือไม่

function processManifest(manifest) {
  const containerId = manifest.containerId;
  if (Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${containerId}`);
    console.log("Total weight: " + normalizeUnits(manifest).weight + " kg");
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(validateManifest(manifest));
  }
  return { ...manifest};
}

const manifest0 = { containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false };

const manifest1 = { containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false };

const manifest2 = { containerId: -88, destination: "Soledad", weight: NaN };

const manifest3 = { destination: "Watsonville", hazmat: true };

processManifest(manifest1);