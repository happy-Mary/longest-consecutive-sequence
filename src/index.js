module.exports = function longestConsecutiveLength(array) {
  var length = array.length;

  if (array.length <= 1) {
    return array.length;
  };

  var count = 1;
  var result = 1;

  array.sort((a, b) => a - b);

  array.forEach((element, i) => {
    if (array[i] === array[i + 1] - 1) {
      count++;
    } else if (array[i] === array[i + 1]) {
      return;
    } else {
      result = (count > result) ? count : result;
      count = 1;
    }
  });
  
  return result;
}

