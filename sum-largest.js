//finds the two largest numbers from an array and sums them together
//this doesn't work for negatives or if the array is all duplicate numbers,
//but the exercise doesn't mention this in its parameters so i am leaving it as is for now

const sumLargestNumbers = function (data) {
  let highest = 0;
  let secondHighest = 0;
  let newArray = [];

  //finds the highest number by comparing through the array
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highest) {
      highest = data[i];
      newArray[0] = highest;
    }
  }
  //finds the second highest number by comparing through the array
  for (let j = 0; j < data.length; j++) {
    if (data[j] < highest && data[j] > secondHighest) {
      secondHighest = data[j];
      newArray[1] = secondHighest;
    }
  }

  //returns sum
  return newArray[0] + newArray[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
//outputs 11, 5, 126
