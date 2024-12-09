function range(debut, fin, step = 1) {
  let resultat = [];
  if (step > 0) {
    for (let i = debut; i <= fin; i += step) {
      resultat.push(i);
    }
  } else {
    for (let i = debut; i >= fin; i += step) {
      resultat.push(i);
    }
  }
  return resultat;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(range(1, 10));        // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));     // → [5, 4, 3, 2]
console.log(sum(range(1, 10)));   // → 55