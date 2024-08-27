
module.exports = function towelSort (matrix) {
  if(!matrix){return []}
  return matrix.flatMap((element, index) => {
    if (index % 2 === 1){
      return element.reverse()
    }  else {
      return element
    }
  }

  );
}
