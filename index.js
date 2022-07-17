function isPalindrome(word) {
  // Write your algorithm here
  let wordArr = [Array.from(word.toLowerCase())];
  let resultsArr = []
  //console.log(wordArr)

  for (let letterId in wordArr[0]) {
    //console.log(letterId)
    let lettersPair = [wordArr[0][letterId], wordArr[0][wordArr[0].length-1-letterId]]
    //console.log(lettersPair)
    if (lettersPair[0] !== lettersPair[1]) {
      resultsArr.push(false)
      break
    } else {
      resultsArr.push(true)
    }
  }
  //console.log(resultsArr)
  //console.log(resultsArr, resultsArr[resultsArr.length - 1])
  if (resultsArr[resultsArr.length - 1] === false) {
    return false
  } else {
    return true
  }
}
//console.log(isPalindrome('rachickencecar'))

/* 
  Add your pseudocode here
1. create empty array DONE
2. break input word into individual character strings, store in array DONE
3. iterate through array, 
    comparing nth character to length-nth character (refine numbers here)
4. no need to check all, if a single one fails then break
5. if all comparisons pass, word is palindrome. if break occurs, it is not
*/

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chicken"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("reviver"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));  
}

module.exports = isPalindrome;
