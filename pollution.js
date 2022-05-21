/*
checks a collection of air samples to determine if the air is clean or polluted.
takes in two arguments: and array of strings representing the air samples,
and a number representing the threshold for air to be considered polluted
(anything over the threshold is polluted; anything under is clean)
*/

const checkAir = function (samples, threshold) {
  let dirtiness = 0;

  //increases the dirtiness counter every time the string "dirty" is encountered
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtiness++;
    }
  }

  //checks the dirtiness ratio against the accepted threshold
  if (dirtiness / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);

/*
expected output:
Polluted
Polluted
Clean
*/
