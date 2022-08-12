
// You should implement your task here.

module.exports = function towelSort(matrix) {
  
let array = [];

  for (i in matrix)
  {
    if (i % 2 == 0)
    {
      for (n in matrix[i])
      {
        array.push(matrix[i][n]);
    }
  }
    else
      {
        let a = matrix[i].reverse();
        for (let n = 0; n < matrix[i].length; n++) {
          array.push(matrix[i][n]);
      }
    }
}

return array;
  
}
