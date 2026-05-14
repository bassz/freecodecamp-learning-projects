const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

const randomNumber = Math.round(Math.random() * 4) + 1;



// test ตัวอย่าง //
let score = 101;

if (score >= 90) { console.log("ยอดเยี่ยม"); }
else if (score >= 80) { console.log("เก่ง"); }
else if (score >= 50) { console.log("ผ่าน"); }
else { console.log("ไม่ผ่าน"); }