/* page 25 task 1
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if the
number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be
divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0)  -> false
isPrime(1)  -> false
*/

console.log('--- page 25 - task 1'); 
const isPrime = (num) => {
    if(num > 1) {
        for (i = 2 ; i <= num; i++  ){    
            return !(num % i === 0 && num !== i );
        }
    } 
    return false;
    
}
console.log('isPrime(5)   -> ', isPrime(5) );
console.log('isPrime(2)   -> ', isPrime(2) );
console.log('isPrime(29)  -> ', isPrime(29) );
console.log('isPrime(-5)  -> ', isPrime(-5) );
console.log('isPrime(0)   -> ', isPrime(0) );
console.log('isPrime(1)   -> ', isPrime(1) );
console.log('--- page 25 -  1'); 
console.log('isPrime(31)   -> ', isPrime(31) );
console.log('isPrime(19)   -> ', isPrime(19) );
console.log('isPrime(23)   -> ', isPrime(23) );
console.log('isPrime(13)   -> ', isPrime(13) );
console.log('isPrime(11)   -> ', isPrime(11) );
console.log('isPrime(7)   -> ', isPrime(7));
