function isEven(n) {
  if (n === 0) {
      return true;
  } else if (n === 1) {
      return false;
  } else {
      return isEven(n - 2);
  }
}
console.log (isEven(50));
console.log (isEven(75));
console.log (isEven(-1));

dans le cas de n = -1 on utilise la valeur absolue pour convertir le nombre en positif puis on fait appel 
à 'isEven' avec -n 
dans ce cas on ajoute le "n = Math.abs(n) " afin de prendre la valeur absolue de n

et donc notre fonction va devenir :

function isEven(n) {
    n = Math.abs(n)
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
  }
  console.log (isEven(50));
  console.log (isEven(75));
  console.log (isEven(-1));