/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/*
product([2, 3, 4])
  call stack           calculation
  2 * product([3, 4]) -> 2 * 12 = 24 answer!
  3 * product([4]) -> 3 * 4
  4 * product([]) = 1 -> 4 * 1
*/

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  if (idx === words.length) return longestSoFar;
  //compare the current word length with the longestSoFar
  longestSoFar = Math.max(words[idx].length, longestSoFar);
  //increment idx and check the next word with the longestSoFar
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  //concatnate the character in the idx
  newStr += str[idx];
  //increment idx by 2 to get the even idx
  return everyOther(str, idx + 2, newStr);
}



/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/*
    L     R
     L   R
      L R
       L/R  -> returns true
   "tacocat"
idx 0123456
*/

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  //concatnate the string from the end of str
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}



/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj){
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    //if it's an object run this function again and check if it's string or not.
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
