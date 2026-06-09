const questions = [
  { category: "Science", question: "What planet is known as the Red Planet?", choices: ["Venus", "Mars", "Jupiter"], answer: "Mars" },
  
  { category: "Geography", question: "What is the capital of France?", choices: ["London", "Berlin", "Paris"], answer: "Paris" },
  
  { category: "Math", question: "What is 5 + 7?", choices: ["10", "12", "14"], answer: "12" },
  
  { category: "History", question: "Who was the first US President?", choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"], answer: "George Washington" },
  
  { category: "Nature", question: "What is the largest mammal?", choices: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale"}]

function getRandomQuestion(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomQuestion(questions))

function getRandomComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getResults(questionObj, computerChoice) {
  if (questionObj.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}