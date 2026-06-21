function findLongestWordLength(str) {
  const words = str.split(" ");
  let longest = 0;
  for (let i = 0; i < words.length; i++) {
    if (longest < words[i].length) {
      longest = words[i].length;
    }
  }
  return longest;
}
/* เขียนอีกแบบนึงโดยการใช้ for...of
words = str.split(" ");
let longest = 0;
for (const word of words) {
if (longest < word.length) {
longest = word.length;
}
*/


console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));