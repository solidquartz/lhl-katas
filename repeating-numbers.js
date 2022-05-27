//returns a string in which the given values are repeated
//an appropriate number of times.
//the first value in each pair is the number to repeat
//the second value is the number of times to repeat
//adds a comma between each set of values if there is more than one

const repeatNumbers = function (data) {
  let repeatedNumbers = '';

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      repeatedNumbers += data[i][0];
    }
    repeatedNumbers += ', ';
  }
  return repeatedNumbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

/*
expected output
1111111111
11, 222
10101010, 343434343434, 9292
*/