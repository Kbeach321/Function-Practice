(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(x, y) {
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  console.assert(max(2, 3) === 3, "Incorrect");


  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(x, y, z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
  }
  console.assert(maxOfThree(4, 3, 1) === 4, "Incorrect")


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(x) {
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
      return true;
    } else {
      return false;
    }
  }

  console.assert(isVowel("e") === true, "Incorrect")

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // // function rovarsparaket(str){
  //
  // 	var strArray = str.split('');
  // 	console.log('string array', strArray);
  //
  // 	// create an empty array
  // 	var translatedString = [];
  // // for loop to add characters into translatedString array
  // 	for(var i = 0; i < strArray.length; i++) {
  // 		 console.log('char', strArray[i]);
  //
  // 		if(true) {
  // 			// double the consonant, add a o between it
  // 			// add that string into the translatedString array
  // 		} else {
  // 			// add string into the translatedString array
  // 		}
  // 	}
  // // join the characters in the translatedString array together into a sentence
  //
  // }
  //
  // rovarsparaket('this is fun');

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  let myArray = [1, 2, 3, 4]
  //  Define a function sum() over each number of array //
  function sum(myArray) {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
      sum = sum + myArray[i];
    }
    return sum;
  }
  console.assert(sum(myArray) === 10, "Incorrect")

  // Define a function multiply() over each number of array //
  function multiply(myArray) {
    var multiply = 1;
    for (var i = 0; i < myArray.length; i++) {
      multiply = multiply * myArray[i];
    }
    return multiply;
  }
  console.assert(multiply(myArray) === 24, "Incorrect")

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  // Split the String, Reverse it, Combine it back //
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  console.assert(reverse("Hello World") === "dlroW olleH", "Incorrect")



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  var wordArray = ["The", "Bird", "is", "Fried", "Chicken", "sorry"]
  // Determine longestword from an array //
  // Array --> reduce --> record length //
  function findLongestWord(wordArray) {
    return wordArray.reduce((a, b) => {
        if (b.length > a.length) {
          return b;
        } else {
          return a;
        }
      return wordArray.length;
    })
  }

  console.log(findLongestWord(wordArray))


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  // Return longer words than input(i) //
  function filterLongWords() {

  }




  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  // Counts char frequency //
	// Empty Object to hold numbers, itterate over string //
  function charFreq(str) {
		var letters = {}
		for (var i=0; i<string.length;i++){
			
		}

  }




})();
