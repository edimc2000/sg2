/* --- page 21 - task 1
Factorial
Write a function named as factorial() which takes a number as an argument and returns the factorial of
the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/
console.log('--- page 21 - task 1')
const factorial = num => {
    let result = 1;
    if(num < 2) {
        return result
    } else {
        for (i = 1; i <= num; i++)
        result *= i;
    }
    return result;   
}



console.log('factorial(5) -> ', factorial(5));
console.log('factorial(4) -> ', factorial(4));
console.log('factorial(0) -> ', factorial(0));
console.log('factorial(1) -> ', factorial(1));

/* --- page 21 - task 2
Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and returns the
count of the words that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello") -> 0
count3OrLess("Hi John") -> 1
count3OrLess("JavaScript is fun") -> 2
count3OrLess("My name is John Doe") -> 3
count3OrLess("") -> 0
*/
console.log('--- page 21 - task 2')
// below does not count the empty string
const count3OrLess = string => string.trim().split(' ').reduce((acc, curr) => curr.length < 4 && curr.length !== 0? acc + 1: acc ,0)

console.log('count3OrLess("Hello")               -> ', count3OrLess("Hello")  );
console.log('count3OrLess("Hi John")             -> ', count3OrLess("Hi John")  );
console.log('count3OrLess("JavaScript is fun")   -> ', count3OrLess("JavaScript is fun")  );
console.log('count3OrLess("My name is John Doe") -> ', count3OrLess("My name is John Doe")  );
console.log('count3OrLess("")                    -> ', count3OrLess("")  );

/* --- page 21 - task 3
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument and
returns the string back with all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""
*/

console.log('--- page 21 - task 3')
const removeExtraSpaces = string => string.trim(); 

console.log('removeExtraSpaces("Hello")              -> ', removeExtraSpaces("Hello"));
console.log('removeExtraSpaces(" Hello World ")      -> ', removeExtraSpaces(" Hello World "));
console.log('removeExtraSpaces(" JavaScript is fun") -> ', removeExtraSpaces(" JavaScript is fun") );
console.log('removeExtraSpaces("")                   -> ', removeExtraSpaces(""));


