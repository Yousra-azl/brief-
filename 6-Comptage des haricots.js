function countBs(String) {
  let count = 0;
  for (let i = 0; i < String.length; i++) {
    if (String[i] === 'B') {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));

function countChar(String, char) {
  let count = 0;
  for (let i = 0; i < String.length; i++) {
    if (String[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));