function isPalindrome(word) {
  // Write your algorithm here
  let isPalindrome = false;
  let ltrArray = [...word];
  let ltrReversed = [];
  for (const letter of ltrArray) {
    ltrReversed.unshift(letter);
  };
  if (ltrArray.toString() === ltrReversed.toString()) {
    isPalindrome = true;
  };
  return isPalindrome;
};

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bait"));
};

module.exports = isPalindrome;
