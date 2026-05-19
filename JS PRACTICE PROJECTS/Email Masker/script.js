function maskEmail(email) {
  const username = email.slice(0, email.indexOf("@"));
  return username.at(0) + "*".repeat(username.length - 2) + username.at(-1) + email.slice(email.indexOf("@")); 
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));