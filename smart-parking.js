/*
returns coordinates [x ,y] for a particular vehicle based on rules for each vehicle type
and the availability of parking. returns false if there is no available spot.
the function receives an array of arrays representing parking spots AND a string
with the type of car looking for the spot.

regular cars: R spots
small cars: R or S spots
motorcycles: R, S, or M spots

UPPERCASE = available
lowercase = unavailable 
*/

const whereCanIPark = function (spots, vehicle) {
  //loops through y (nested arrays)
  for (let y = 0; y < spots.length; y++) {
    //loops through x (each item in each nested array)
    for (let x = 0; x < spots[y].length; x++) {
      //allows us to check spots
      const spot = spots[y][x];
      console.log(spot);

      //we are now looking at each individual spot

      //for regular cars
      if (vehicle === "regular") {
        if (spot === "R") {
          return [x, y];
        }

        //for small cars
      } else if (vehicle === "small") {
        if (spot === "S" || spot === "R") {
          return [x, y];
        }

        //for motorcycles
      } else if (vehicle === "motorcycle") {
        if (spot === "S" || spot === "M" || spot === "R") {
          return [x, y];
        }
      }
    }
  }

  //this will run only if no spots are found (outside loops;
  //the loops will exit and return if a spot is found)
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);
//outputs [4, 0]

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);
//outputs false

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
//outputs [3, 1]
