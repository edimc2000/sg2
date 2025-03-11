
/* task p20  task 1
Find Numbers Divisible By 5
 Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers
 divisible by 5 as an array stored from first found match to last found match when invoked.
 NOTE: Make your code dynamic that works for any numbers and return empty array if there are no
 numbers divisible by 5 in the range of given 2 numbers.
 Assume you will not be given negative numbers.
Examples:
 getMultipleOf5(3, 17) -> [ 5, 10, 15]
 getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
 getMultipleOf5(5, 5)  -> [ 5 ]
 getMultipleOf5(2, 4)  -> [ ]

*/
console.log('--- page 20 - task 1'); 
const getMultipleOf5 = (n1, n2) => {
    let arr = []; 
    for(let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++){
        i % 5 === 0 ? arr.push(i): null; 
    }
    return n2 > n2 ? arr : arr.reverse()
}

console.log('getMultipleOf5(3, 17) -> ', getMultipleOf5(3, 17) );
console.log('getMultipleOf5(23, 5) -> ', getMultipleOf5(23, 5) ); 
console.log('getMultipleOf5(5, 5)  -> ', getMultipleOf5(5, 5)  ); 
console.log('getMultipleOf5(2, 4)  -> ', getMultipleOf5(2, 4)  ); 

/*p20  task 2
Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and returns how
many elements are negative when invoked.
Examples:
countNeg([-45, 0, 0, 34, 5, 67])      -> 1
countNeg([-23, -4, 0, 2, 5, 90, 123]) -> 2
countNeg([0, -1, -2, -3])             -> 3
*/

console.log('\n--- page 20 - task 2'); 
const countNeg = arr => arr.reduce ( (acc, curr) => curr < 0 ? acc + 1 : acc, 0 )

console.log('countNeg([-45, 0, 0, 34, 5, 67])      -> ', countNeg([-45, 0, 0, 34, 5, 67])  ); 
console.log('countNeg([-23, -4, 0, 2, 5, 90, 123]) -> ', countNeg([-23, -4, 0, 2, 5, 90, 123])  );
console.log('countNeg([0, -1, -2, -3])             -> ', countNeg([0, -1, -2, -3])  );

/*p20  task 3
Count A
Write a function named countA() which takes a string argument and returns how many A or a there are
in the given string when invoked.
NOTE: Ignore case sensitivity.
Examples:
countA("TechGlobal is a QA bootcamp")     -> 4
countA("QA stands for Quality Assurance") -> 5
countA("Cypress")                         -> 0
*/
console.log('\n--- page 20 - task 3'); 
const countA = string => string.trim().split('').reduce( (acc, curr) => curr.toLowerCase().includes('a') ? acc + 1  : acc, 0)

console.log('countA("TechGlobal is a QA bootcamp")     -> ', countA("TechGlobal is a QA bootcamp"));
console.log('countA("QA stands for Quality Assurance") -> ', countA("QA stands for Quality Assurance"));
console.log('countA("Cypress")                         -> ', countA("Cypress"));


/*p20  task 4
Count Words
Write a function named countWords() which takes a string argument and returns the total count of
words in the given string when invoked.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ")                -> 3
countWords("Cypress is an UI automation tool. ") -> 6
countWords("1 2 3 4")                            -> 4
*/
console.log('\n--- page 20 - task 4'); 
const countWords = string => string.trim().split(' ').length; 

console.log('countWords("Javascript is fun ")                 -> ', countWords("Javascript is fun ") );
console.log('countWords("Cypress is an UI automation tool. ") -> ', countWords("Cypress is an UI automation tool. ") );
console.log('countWords("1 2 3 4")                            -> ', countWords("1 2 3 4") );