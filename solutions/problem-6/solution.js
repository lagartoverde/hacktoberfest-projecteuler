function sum_of_squares(n){
  return (n * (n + 1) * (2 * n + 1) ) / 6
}

function square_sum(n){
  return (n * (n + 1) / 2) ** 2
}
  
console.log(square_sum(100) - sum_of_squares(100))