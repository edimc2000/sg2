/* page 23 task 1 
Count Vowels
 Write a function named as countVowels() which takes a string word as an argument and returns the
 count of the vowel letters when invoked.
 NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
 countVowels("Hello")             -> 2
 countVowels("JavaScript is fun") -> 5
 countVowels("")                  -> 0
*/
console.log('--- page 23 - task 2'); 
const countVowels = string => string.trim().toLowerCase().split('').reduce( (acc, curr) => 'aeiou'.includes(curr) ? acc + 1 : acc, 0 );

console.log('countVowels("Hello")             -> ', countVowels("Hello"));
console.log('countVowels("JavaScript is fun") -> ', countVowels("JavaScript is fun"));
console.log('countVowels("")                  -> ', countVowels("") );

/* page 23 task 2
Reverse String Words
 Write a function named as reverseStringWords() which takes a string as an argument and returns
 string back with each word separately reversed when invoked.
 NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before
 and after words in the given string.
Examples:
 reverseStringWords("Hello World")       -> "olleH dlroW"
 reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
 reverseStringWords("Hello")             -> "olleH"
 reverseStringWords("")                  -> ""
 reverseStringWords(" ")                 -> ""
*/
console.log('--- page 23 - task 2'); 
const reverseStringWords = string => {
        let strArr = string.trim().split(' '); 
        let arr = [];
        for (let element of strArr) {
            arr.push(element.split('').reverse().join(''));
        }
        return arr.join(' ');
}

console.log('reverseStringWords("Hello World")       -> ', reverseStringWords("Hello World") ); 
console.log('reverseStringWords("I like JavaScript") -> ', reverseStringWords("I like JavaScript"));
console.log('reverseStringWords("Hello")             -> ', reverseStringWords("Hello")  );
console.log('reverseStringWords("")                  -> ', reverseStringWords("") );
console.log('reverseStringWords(" ")                 -> ', reverseStringWords(" ")  ); 


/* page 23 task 3
Count Consonants
 Write a function named as countConsonants() which takes a string word as an argument and returns
 the count of the consonant letters when invoked.
 NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
 countConsonants("Hello")             -> 3
 countConsonants("Hello World")       -> 8  // 7 space should not be counted 
 countConsonants("JavaScript is fun") -> 12 // 10 space should not be counted 
 countConsonants("")                  -> 0
*/

console.log('--- page 23 - task 3'); 
const countConsonants = string => string.split('').reduce( (acc, curr) =>  'qwrtyplkjhgfdszxcvbnm'.includes(curr.toLowerCase()) ? acc+1 : acc, 0)


console.log('countConsonants("Hello")             -> ', countConsonants("Hello") );
console.log('countConsonants("Hello World")       -> ', countConsonants("Hello World") );
console.log('countConsonants("JavaScript is fun") -> ', countConsonants("JavaScript is fun") );    
console.log('countConsonants("")                  -> ', countConsonants("") );