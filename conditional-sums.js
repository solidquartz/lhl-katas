//takes in an array of numbers and a condition, "odd or "even", and adds only the
//values that match that condition.
//if no values match, it returns 0.
//loops are required

const conditionalSum = function (values, condition) {
  let even = [];
  let odd = [];

  //splits evens and odds into separate arrays AND checks there are numbers
  if (values && values.length) {
    //checks for numbers existing in the array
    for (let i = 0; i < values.length; i++) {
      //pushes even numbers to their own array
      if (values[i] % 2 === 0) {
        even.push(values[i]);
      } else {
        odd.push(values[i]); //else is fine since only valid arrays make it here
      }
    }
  } else {
    return 0; //runs if the array isn't valid; for loop won't run
  }

  //returns the appropriate new array to the function
  if (condition === "even") {
    return even;
  } else if (condition === "odd") {
    return odd;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
