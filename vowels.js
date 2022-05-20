//receives a string and returns the number of vowels in that string

const numberOfVowels = function (data) {
  let vowelNumber = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'i' || data[i] === 'u' || data[i] === 'e' || data[i] === 'o') {
      vowelNumber += 1;
    };
  };
  return vowelNumber;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
