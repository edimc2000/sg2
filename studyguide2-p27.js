/* page 27 task 1
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with all digits
removed from the original string.
Examples:
noDigit("")                    -> ""
noDigit("Javascript")          -> "Javascript"
noDigit("123Hello")            -> "Hello"
noDigit("123Hello World149")   -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"
*/
console.log('--- page 27 - task 2'); 
const noDigit = string => string.trim().split('').filter(element => !('0123456789'.includes(element))).join('')

console.log('noDigit("")                    -> ', noDigit("")   );
console.log('noDigit("Javascript")          -> ', noDigit("Javascript") );
console.log('noDigit("123Hello")            -> ', noDigit("123Hello")  );
console.log('noDigit("123Hello World149")   -> ', noDigit("123Hello World149"));
console.log('noDigit("123Tech456Global149") -> ', noDigit("123Tech456Global149") );

/* page 27 task 2
No Vowel
Write a function named noVowel() which takes a string argument and returns a new string with all
vowels removed from the original string.
Examples:
noVowel("TechGlobal")      -> "TchGlbl"
noVowel("AEOxyz")          -> "xyz"
noVowel("Javascript")      -> "Jvscrpt"
noVowel("")                -> ""
noVowel("125$")            -> "125$"
*/
console.log('--- page 27 - task 2'); 
const noVowel = string => string.trim().split('').filter(element => !('aeiou'.includes(element.toLowerCase()))).join('')
console.log('noVowel("TechGlobal")      -> ', noVowel("TechGlobal")   );
console.log('noVowel("AEOxyz")          -> ', noVowel("AEOxyz")   );
console.log('noVowel("Javascript")      -> ', noVowel("Javascript")   );
console.log('noVowel("")                -> ', noVowel("")   );
console.log('noVowel("125$")            -> ', noVowel("125$")   );



/* page 27 task 3
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from
the original string.
Examples:
sumOfDigits("Javascript")       -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0")           -> 8
sumOfDigits("")                 -> 0
*/
console.log('--- page 27 - task 3'); 
const sumOfDigits = string => {
    let filtered = string.trim().split('').filter( element => '0123456789'.includes(element))
    return filtered.reduce((acc, curr) => Number(acc) + Number(curr), 0)
} 
console.log('sumOfDigits("Javascript")       -> ', sumOfDigits("Javascript"));
console.log('sumOfDigits("John’s age is 29") -> ', sumOfDigits("John’s age is 29"));
console.log('sumOfDigits("$125.0")           -> ', sumOfDigits("$125.0"));
console.log('sumOfDigits("")                 -> ', sumOfDigits(""));