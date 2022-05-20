//takes a list of instructors and returns the name with the most characters
//if two instructors have the longest name, return the first one

const instructorWithLongestName = function (instructors) {
  //initial value so the function can compare. this also initializes it as an object.
  let longestName = instructors[0];

  for (let i = 0; i < instructors.length; i++) {
    //because of how it loops through, since longestName only checks for *greater than*,
    //it will not overwrite if the lengths are the same, so the first one will
    //always be returned. also ignores the course key.
    if (instructors[i].name.length > longestName.name.length) {
      //updates the variable with the longest name OBJECT
      longestName = instructors[i];
    }
  }
  a;
  //returns the object including both name and course
  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

/*
expected output 
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/
