
/* TASK x 
Double or Triple the Word
 Write a function named as doubleOrTripleWord() which takes a string word as an argument and
 returns the given word back tripled if the string length is even or doubled if the string 
 length is odd when
 invoked.
Examples:
 doubleOrTripleWord("Tech")      -> "TechTechTech"
 doubleOrTripleWord("Apple")     -> "AppleApple”
 doubleOrTripleWord("")          -> ""
 doubleOrTripleWord(" ")         -> " "
 doubleOrTripleWord("1")         -> "11"
 doubleOrTripleWord("22")        -> "222222"
*/

console.log('--- page 17 - task 1'); 
const doubleOrTripleWord = (string) => string.length % 2 === 0 ? string.repeat(3) : string.repeat(2);

console.log('doubleOrTripleWord("Tech")  ->', doubleOrTripleWord("Tech") );
console.log('doubleOrTripleWord("Apple") ->', doubleOrTripleWord("Apple") );
console.log('doubleOrTripleWord("")      ->', doubleOrTripleWord("") ); 
console.log('doubleOrTripleWord(" ")     ->', doubleOrTripleWord(" ") );
console.log('doubleOrTripleWord("1")     ->', doubleOrTripleWord("1") );
console.log('doubleOrTripleWord("22")    ->', doubleOrTripleWord("22") );


/*
First and Last Word
 Write a function named as firstlastWord() which takes a string word as an argument and returns the
 first and last words from the given string when invoked.
 NOTE: Return empty string if the given string does not have any word.
Examples:
 firstLastWord("Hello World")       -> "HelloWorld"
 firstLastWord("I like JavaScript") -> "IJavaScript”
 firstLastWord("Hello")             -> "HelloHello"
 firstLastWord("")                  -> ""
 firstLastWord(" ")                 -> ""
*/

console.log('--- page 17 - task 2'); 

const firstlastWord = (string) => string.trim().split(' ').at(0) + string.trim().split(' ').at(-1);

console.log('firstLastWord("Hello World")       ->', firstlastWord("Hello World") ); 
console.log('firstLastWord("I like JavaScript") ->', firstlastWord("I like JavaScript") ); 
console.log('firstLastWord("Hello")             ->', firstlastWord("Hello") ); 
console.log('firstLastWord("")                  ->', firstlastWord("") ); 
console.log('firstLastWord(" ")                 ->', firstlastWord(" ") ); 


/* task 
Has Vowel
 Write a function named hasVowel() which takes a string argument and returns true if the string has a
 vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
 hasVowel("") -> false
 hasVowel("Javascript") -> true
 hasVowel("Tech Global") -> true
 hasVowel("1234") -> false
 hasVowel("ABC") -> true
*/

console.log('--- page 17 - task 3'); 

const hasVowel = (string) =>  /[aeiou]/i.test(string); 


console.log('hasVowel("")            ->', hasVowel("") );
console.log('hasVowel("Javascript")  ->', hasVowel("Javascript"));
console.log('hasVowel("Tech Global") ->', hasVowel("Tech Global"));
console.log('hasVowel("1234")        ->', hasVowel("1234"));
console.log('hasVowel("ABC")         ->', hasVowel("ABC"));



/* task 
Start Vowel
 Write a function named as startVowel() which takes a string word as an argument and returns true if
 given string starts with a vowel, and false otherwise when invoked.
 NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
Examples:
 startVowel("Hello") -> false
 startVowel("Apple") -> true
 startVowel("orange") -> true
 startVowel("") -> false
 startVowel(" ") -> false 
 startVowel("123") -> false
*/

console.log('--- page 17 - task 4'); 

const startVowel = (string) => 'aeiou'.includes(string.toLowerCase()[0]); 

console.log('startVowel("Hello")  -> ', startVowel("Hello"));
console.log('startVowel("Apple")  -> ', startVowel("Apple"));
console.log('startVowel("orange") -> ', startVowel("orange"));
console.log('startVowel("")       -> ', startVowel(""));
console.log('startVowel(" ")      -> ', startVowel(" ")); 
console.log('startVowel("123")    -> ', startVowel("123"));


