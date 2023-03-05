/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/*
product([2, 3, 4])
  call stack           calculation
  2 * product([3, 4]) -> 2 * 12 = 24 answer!
  3 * product([4]) -> 3 * 4
  4 * product([]) = 1 -> 4 * 1
*/

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // let count = []
  // console.log('words:', words);
  // console.log('count:', count);
  // if(words.length === 0) return Math.max(count);
  // console.log('words.slice:', words.slice(0,1));
  // return count.push(longest(words.slice(0, 1)[0].length));


}
/*
longest(["hello", "hi", "hola"]))
  "hello" 

*/

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let n = 0;
  if(n > str.length) return "";
  if(n % 2 === 0) {
    console.log('n:', n)
    console.log('char:', str.charAt(n))
    return everyOther(str.charAt(n))
  }

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

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
