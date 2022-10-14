//check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

const isIt100 = (a, b) => {
  if (a === 100 || b === 100) {
    return true;
  } else if (a + b === 100) {
    return true;
  } else {
    return false;
  }
};

console.log(
  "Tests for: checking two numbers and returning true if one of the numbers is 100 or if the sum of the two numbers is 100"
);
console.log(isIt100(100, 9));
console.log(isIt100(20, 100));
console.log(isIt100(50, 9));
console.log(isIt100(75, 25));
console.log(isIt100(50, 50));
console.log(isIt100(101, 9));

//get the extension of a filename
const findFileExtension = (fileName) => {
  let slicer = fileName.split("").lastIndexOf(".");
  let extension = fileName.slice(slicer);
  return extension;
};

//alt video solution const findExtension = (fileName) => fileName.slice(fileName.lastIndexOf('.'));

console.log("Tests for: finding the file extension when given a filename");
console.log(findFileExtension("something.jpg"));
console.log(findFileExtension("something.png"));
console.log(findFileExtension("something.html"));
console.log(findFileExtension("something.js"));

//write function to replace every character in a string with the character following it in the alphabet

const letterShift = (str) => {
  str = str.toLowerCase();
  let results = "";
  let charCode = 0;
  for (let i = 0; i < str.length; i++) {
    charCode = str[i].charCodeAt() + 1;
    results += String.fromCharCode(charCode);
  }
  return results;
};

console.log(
  "Tests for: function that replaces every character in a string with the following character"
);
console.log(letterShift("abc"));
console.log(letterShift("secret code"));
console.log(letterShift("string of words"));
console.log(letterShift("xyz"));

//alternative solution from video
// const moveCharsForward = (str) => {
//   str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1)).join('');
// }
//video acknowledges that if letter = z then output could be a, but this was not specified in directions

//Write js for current date

const currentDate = () => {
  const newDate = new Date();
  return newDate.toLocaleDateString();
};

//toLocaleDateString may not have been an available method at time of video. Video solution created variables for dates, months and years and concatenated the return

console.log("Test for grabbing date in mm-dd-yyy format");
console.log(currentDate());

const addNew = (str) => {
  if (str.indexOf("New!") === 0) {
    return str;
  } else {
    return "New! " + str;
  }
};
//originally had if str[0] === 'New!' but str[0] = N.
console.log(
  "Test for function that will add 'New!' to the beginning of strings like a product ad. However, will return original string if first word already 'New!'"
);
console.log(addNew("Burgers and fries"));
console.log(addNew("New! Burgers and fries"));
