/* page 24 task 1
Count Multiple Words
 Write a function named as countMultipleWords() which takes an array as an argument and returns the
 count of the elements that has multiple words when invoked.
 NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
 countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])        -> 1
 countMultipleWords([ "foo", "bar", "foobar", " foobar " ])       -> 0
 countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
 countMultipleWords([ ])                                          -> 0
*/
console.log('--- page 24 - task 1'); 
const countMultipleWords = arr => arr.reduce( (acc, curr) =>  curr.trim().split(' ').length > 1 ? acc + 1 : acc, 0)

console.log('countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])        -> ', countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])   );
console.log('countMultipleWords([ "foo", "bar", "foobar", " foobar " ])       -> ', countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) );
console.log('countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> ', countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])  );
console.log('countMultipleWords([ ])                                          -> ', countMultipleWords([ ]) );

/* page 24 task 2
FizzBuzz
 Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed
 with below requirements when invoked.
 • You need to find all the numbers within the range of given 2 numbers (both inclusive) and store
 them in a string from smallest to greatest number with a ' | ' separator for each number.
 • You will need to convert numbers divisible by 3 to 'Fizz'
 • You will need to convert numbers divisible by 5 to 'Buzz'
 • You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
 • The rest will stay the same.
 NOTE: Make your code dynamic that works for any numbers.
 Assume you will not be given negative numbers.
Examples:
 fizzBuzz(13, 18)   -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
 fizzBuzz(12, 5)    -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
 fizzBuzz(5, 5)     -> "Buzz"
 fizzBuzz(9, 6)     -> "Fizz | 7 | 8 | Fizz"
*/
console.log('--- page 24 - task 2'); 
const fizzBuzz = (num1, num2) => {
    let arr = []
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        arr.push(i)
    }
    return arr.map( element => element % 5  === 0 && element %3 === 0 ?'"FizzBuzz' : element % 5  === 0 ? 'Buzz' : element % 3  === 0 ? 'Fizz' : element).join(' | ')
}

console.log('fizzBuzz(13, 18)   -> ', fizzBuzz(13, 18));
console.log('fizzBuzz(12, 5)    -> ', fizzBuzz(12, 5));
console.log('fizzBuzz(5, 5)     -> ', fizzBuzz(5, 5) );
console.log('fizzBuzz(9, 6)     -> ', fizzBuzz(9, 6) );

/* page 24 task 3
Palindrome
 Write a function named as isPalindrome() which takes a string word as an argument and returns true if
 the word is palindrome or returns false otherwise when invoked.
 NOTE: Palindrome: It is a word that is read the same backward as forward
 Examples: kayak, civic, madam
 NOTE: your function should ignore case sensitivity
Examples:
 isPalindrome("Hello")    -> false
 isPalindrome("Kayak")    -> true
 isPalindrome("civic")    -> true
 isPalindrome("abba")     -> true
 isPalindrome("ab a")     -> false
 isPalindrome("123454321")-> true
 isPalindrome("A")        -> true
 isPalindrome("")         -> true
*/
console.log('--- page 24 - task 23'); 
const isPalindrome = string => {
    let strArr1 = string.trim().toLowerCase().split('');
    let strArr2 = [... strArr1].reverse();
    return strArr1.join('') === strArr2.join('')
}

console.log('isPalindrome("Hello")    -> ', isPalindrome("Hello"));
console.log('isPalindrome("Kayak")    -> ', isPalindrome("Kayak"));
console.log('isPalindrome("civic")    -> ', isPalindrome("civic"));
console.log('isPalindrome("abba")     -> ', isPalindrome("abba"));
console.log('isPalindrome("ab a")     -> ', isPalindrome("ab a"));
console.log('isPalindrome("123454321")-> ', isPalindrome("123454321"));
console.log('isPalindrome("A")        -> ', isPalindrome("A"));
console.log('isPalindrome("")         -> ', isPalindrome(""));