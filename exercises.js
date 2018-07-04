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

  function rovarsparaket(string) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var translation = '';

    for(var i = 0; i < string.length; i++) {
      if(string[i] === ' ' || vowels.indexOf(string[i]) !== -1) {

        translation += string[i];
      } else {
        translation += string[i] + 'o' + string[i];
      }
    }
    return translation;
  }

  rovarsparaket('this is fun');

  console.assert(rovarsparaket('this is fun')=== 'tothohisos isos fofunon', "Incorrect")

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
    var longestWordLength = '';

    wordArray.forEach(function(word) {
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    });

    return longestWordLength;
  }
  // console.log(findLongestWord(wordArray))

  console.assert(findLongestWord(wordArray) === 7, "incorrect")


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  // Return longer words than input(i) //
  function filterLongWords(array, i) {
    var longerArray = [];
    for (var j = 0; j < array.length; j++) {
      if (array[j].length > i) {
        longerArray.push(array[j])
      }
    }
    return longerArray;
  }

  var testArray = ['this', 'is', 'hard', 'zzsdzsdzsdz'];
  console.assert(filterLongWords(testArray, 3).length === 3, "incorrect")


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  // Counts char frequency //

  function charFreq(string) {
    var letterObject = {};
    for (var i = 0; i < string.length; i++) {
      if(letterObject[string[i]]){
        // letterObject[string[i]] = letterObject[string[i]] + 1;
        letterObject[string[i]] += 1;
      } else {
        letterObject[string[i]]=1;
      }
    }
    return letterObject;
  }

  var testString = "ababababababababcc"
  console.log(charFreq(testString))

})();
