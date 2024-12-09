function triangle (rows){
for (let i=1; i<=rows; i++){
  let row = '';
for (let j=0; j<i; j++){
  row +='#'
}
console.log(row)
}
}

triangle(7)