const generateArray = (order, length) => {
  let result = [];
  const shuffle = (array) => {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  };

  if (order === "reversed") {
    for (let i = length; i > 0; i--) {
      result.push(i);
    }
    return result;
  }

  for (i = 1; i <= length; i++) {
    result.push(i);
  }
  if (order === "random") {
    result = shuffle(result);
  }
  return result;
};

module.exports = generateArray;
