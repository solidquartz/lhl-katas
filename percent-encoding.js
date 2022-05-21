//takes in a string and replaces whitespace with %20.
//does not replace whitespace outside the string (ex 2)
//cannot use string.prototype.replace

const urlEncode = function (text) {
  let result = "";
  //converts the string into one without whitespace outside
  let trimmedText = text.trim();

  for (let i = 0; i < trimmedText.length; i++) {
    //changes whitespace into %20
    if (trimmedText[i] === " ") {
      result += "%20";
      //adds the character to the result if it isn't whitespace
    } else if (trimmedText !== " ") {
      result += trimmedText[i];
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
expected output
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/
