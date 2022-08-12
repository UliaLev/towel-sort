
// You should implement your task here.

module.exports = function towelSort(matrix) {
  
  let array = [];
    
  for (let n in matrix) {
      if (n%2 == 1) {
        array.push(matrix[n].reverse().join('').split(''));

}

      else array.push(matrix[n].join('').split(''));
    }

return array;
  
}
