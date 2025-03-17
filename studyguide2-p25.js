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
    if (num<2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false; 
    }
    return true; 
};

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
console.log('isPrime(9)   -> ', isPrime(9));


/* page 25 task 2
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new array
with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2])                  -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11])                -> [0, 0, 0, 0]
*/
console.log('--- page 25 - task 2'); 
const add = (arr1, arr2) => {
    let arrB, arrS; 
    if (arr1.length >= arr2.length) { arrB = arr1; arrS = arr2}
    else {arrB = arr2; arrS = arr1} 
    return arrB.map ((element, index)=> {
        arrS[index] = arrS[index] ?? 0; 
        return arrS[index] + arrB[index]; 
    });
}

console.log('add([3, 0, 0, 7, 5, 10], [6, 3, 2])                  -> ', add([3, 0, 0, 7, 5, 10], [6, 3, 2])   ); 
console.log('add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> ', add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))  ; 
console.log('add[-5, 6, -3, 11], [5, -6, 3, -11])                 -> ', add([-5, 6, -3, 11], [5, -6, 3, -11])    ); 