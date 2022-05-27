//receives a string of words separated with spaces
//converts them into camel cased strings

const camelCase = function (input) {
  let camelWord = "";

  for (let i = 0; i < input.length; i++) {
    //deals with spaces
    if (input[i] === " ") {
      camelWord += input[i + 1].toUpperCase();
      i++; //skips ahead to avoid duplication 

      //letters that don't come after a space
    } else {
      camelWord += input[i];
    }
  }
  return camelWord;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*
expected output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious
*/
