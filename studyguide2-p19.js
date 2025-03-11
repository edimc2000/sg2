
/* task p 19 task 1
Swap First and Last Words
 Write a function named as swapFirstLastWord() which takes a string word as an argument and returns
 the string back with its first and last words swapped when invoked.
 NOTE: Return empty string if the given string does not have 2 or more words.
Examples:
 swapFirstLastWord("Hello World")       -> "World Hello"
 swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
 swapFirstLastWord("foo bar foo bar")   -> "bar bar foo foo"
 swapFirstLastWord("")                  -> ""
 swapFirstLastWord(" ")                 -> ""
 swapFirstLastWord("Hello")             -> ""
 swapFirstLastWord("Hello ")            -> ""
*/
console.log('--- page 19 - task 1'); 
const swapFirstLastWord = string => {
    let strArr = string.trim().split(' ')
    return strArr.length < 2 ? [].join(' ')
        : strArr.map ((element, index) => {
            return index === 0 ? strArr.at(strArr.length-1)
            : index === strArr.length-1 ? strArr.at(0)
            : element 
        }).join(' ')
}

const swapFirstLastWord1 = string => {
    arr = []; 
    let arrStr = string.trim().split(' '); 
    if (arrStr.length < 2){
        return arr.join(' ');
    } else {
        for (let i = 0; i < arrStr.length; i++){
            if (i === 0) {
                arr.push(arrStr.at(-1))
            } else if ( i === arrStr.length-1 ){
                arr.push(arrStr.at(0))
            } else {
                arr.push(arrStr[i])
            }
        } 
    }
    return arr.join(' ');
}




console.log('swapFirstLastWord("Hello World")       -> ', swapFirstLastWord("Hello World")  );
console.log('swapFirstLastWord("I like JavaScript") -> ', swapFirstLastWord("I like JavaScript"));
console.log('swapFirstLastWord("foo bar foo bar")   -> ', swapFirstLastWord("foo bar foo bar") );
console.log('swapFirstLastWord("")                  -> ', swapFirstLastWord("") );
console.log('swapFirstLastWord(" ")                 -> ', swapFirstLastWord(" ") );
console.log('swapFirstLastWord("Hello")             -> ', swapFirstLastWord("Hello"));
console.log('swapFirstLastWord("Hello ")            -> ', swapFirstLastWord("Hello ") );



/*
Count Positive Numbers
Write a function named countPos() which takes an array of numbers as an argument and returns how
many elements are positive when invoked.
Examples:
countPos([-45, 0, 0, 34, 5, 67])      -> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) -> 4
countPos([0, -1, -2, -3])             -> 0
*/

console.log('--- page 19 - task 2'); 
const countPos = (arr) => arr.reduce((acc, curr) => curr > 0 ? acc + 1: acc, 0);

console.log('countPos([-45, 0, 0, 34, 5, 67])      -> ', countPos([-45, 0, 0, 34, 5, 67]) );
console.log('countPos([-23, -4, 0, 2, 5, 90, 123]) -> ', countPos([-23, -4, 0, 2, 5, 90, 123]) );
console.log('countPos([0, -1, -2, -3])             -> ', countPos([0, -1, -2, -3]) );


/*
Find Even Numbers
Write a function named as getEvens() which takes 2 number arguments and returns all the even
numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even
numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7)  -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)  -> [ 4 ]
getEvens(3, 3)  -> [ ]
*/
console.log('--- page 19 - task 3'); 
const getEvens =(num1, num2) => {
    let arr = []; 
    for (i = Math.min(num1,num2); i <= Math.max(num1, num2); i++) {i % 2 === 0 ? arr.push(i) : null}
    return arr; 
} 

console.log('getEvens(2, 7)  -> ', getEvens(2, 7)); 
console.log('getEvens(17, 5) -> ', getEvens(17, 5)); 
console.log('getEvens(4, 4)  -> ', getEvens(4, 4)); 
console.log('getEvens(3, 3)  -> ', getEvens(3, 3) ); 

