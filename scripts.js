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

console.log("///////");
console.log("Leetcode problems below");
// given an array of integers (nums) and an integer target, return the indicies of the two numbers that add up to the target

const twoSum = (nums, target) => {
  let targetIndicies = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        targetIndicies.push(i, j);
        return targetIndicies;
      }
    }
  }
  return "Not Found";
};

//above was what i started with, and it did work with an initial sample test but is semi- incomplete, and takes too long to run. Second attempt below was written with the hint 'what if we 'locked' one number in the array.
// issue: will use integers in one index twice if they = the target
// ex: target = 10, and num[i] = 5, the loop will add num[i] and num[i]

const twoSum2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let secondDigit = target - nums[i];
    let found = nums.indexOf(secondDigit, i + 1);
    if (found !== -1) {
      return [i, found];
    }
  }
  return "Not Found";
};

console.log(twoSum2([3, 2, 4], 6));

let l1 = [2, 3, 4];
let l2 = [5, 6, 4];

const addTwoNumbers = (l1, l2) => {
  let reversel1 = l1.reverse();
  let reversel2 = l2.reverse();
  reversel1.forEach;
};

addTwoNumbers(l1, l2);

//valid parenthesis. Given a string of any combination of (), [] and {} return true if all parenthesis are opened and closed properly, and false if given combinations such as {] or (}

const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const top = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && top === "(" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "]" && top === "[" && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === "}" && top === "{" && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
//note: study up on Map data structure and Sets
