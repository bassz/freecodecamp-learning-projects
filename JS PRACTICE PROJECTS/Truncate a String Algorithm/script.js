function truncateString(string, number) {
if (string.length > number) {
  return string.slice(0, number) + "...";
} else {
  return string;
}
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))

/* truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) จะได้ A-tisket a-tasket A green and yellow basket */