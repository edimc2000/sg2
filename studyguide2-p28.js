/* page 28 task 2
Array Factorial
 Write a function named arrFactorial() which takes an array of numbers as argument and return the
 array with every number replaced with their factorials.
Examples:
 arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
 arrFactorial([0, 5])       -> [1,120]
 arrFactorial([5 , 0, 6])   -> [120, 1, 720]
 arrFactorial([])           -> []
*/
console.log('--- page 28 - task 1'); 
const factorial = num => {
    let result = 1; 
    if (num < 2) {
        return result;
    } else {
        for (let i = 1; i <= num; i++){
            result *= i 
        }
    }
    return result; 
} 

const arrFactorial = arr => arr.map( element => factorial(element) )


console.log('arrFactorial([1, 2, 3 ,4]) -> ', arrFactorial([1, 2, 3 ,4])); 
console.log('arrFactorial([0, 5])       -> ', arrFactorial([0, 5])   );
console.log('arrFactorial([5 , 0, 6])   -> ', arrFactorial([5 , 0, 6]));
console.log('arrFactorial([])           -> ', arrFactorial([])  );