/* page 22 task 1 
Middle Number
 Write a function named middleInt() which takes three number arguments and return the middle
 number.
Examples:
 middleInt(1, 2, 2)    -> 2
 middleInt(5, 5, 8)    -> 5
 middleInt(5, 3, 5)    -> 5
 middleInt(1, 1, 1)    -> 1
 middleInt(-1, 25, 10) -> 10

*/
console.log('--- page 22 - task 1'); 
const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a,b)=>a-b)[1]

console.log('middleInt(1, 2, 2)    -> ', middleInt(1, 2, 2));
console.log('middleInt(5, 5, 8)    -> ', middleInt(5, 5, 8));
console.log('middleInt(5, 3, 5)    -> ', middleInt(5, 3, 5) );
console.log('middleInt(1, 1, 1)    -> ', middleInt(1, 1, 1) );
console.log('middleInt(-1, 25, 10) -> ', middleInt(-1, 25, 10));


/* page 22 - task 2
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the
array. For two elements to be considered as duplicated, value and data types of the elements must be
same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])          -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])           -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])             -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3])                      -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/

console.log('--- page 22 - task 2'); 
const firstDuplicate = (arr) =>  {
    let filtered = arr.filter(element => (arr.indexOf(element) !== arr.lastIndexOf(element))); 
    return filtered.length > 0 ? filtered[0] : -1;
}

console.log(`firstDuplicate([ 3, 7, 10, 0, 3, 10 ])          -> `, firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(`firstDuplicate([ 5, 7, 7, 0, 5, 10 ])           -> `, firstDuplicate([ 5, 7, 7, 0, 5, 10 ]));
console.log(`firstDuplicate([ 5, '5', 3, 7, 4 ])             -> `, firstDuplicate([ 5, '5', 3, 7, 4 ]));
console.log(`firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> `, firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]));
console.log(`firstDuplicate([ 1, 2, 3])                      -> `, firstDuplicate([ 1, 2, 3]));
console.log(`firstDuplicate([ 'foo', 'abc', '123', 'bar' ])  -> `, firstDuplicate([ 'foo', 'abc', '123', 'bar' ]));


/* page 22 - task 3
Find All Duplicate Elements
 Write a function named as getDuplicates() which takes an array argument and returns all the duplicated
 elements in the array when invoked.
 NOTE: Make your code dynamic that works for any array and return empty array if there are no
 duplicates in the array. For two elements to be considered as duplicated, value and data types of the
 elements must be same.
Examples:
 getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])               -> [ 0, -7 ]
 getDuplicates([ 1, 2, 5, 0, 7 ])                                -> [ ]
 getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
 getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                 -> [ ]
*/
console.log('--- page 22 - task 3'); 
const getDuplicates = (arr) => [... new Set(arr.filter(element => arr.indexOf(element) !== arr.lastIndexOf(element)))]; 

console.log(`getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])                -> `, getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]));
console.log(`getDuplicates([ 1, 2, 5, 0, 7 ])                                 -> `, getDuplicates([ 1, 2, 5, 0, 7 ]));
console.log(`getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ])  -> `, getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]));
console.log(`getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                  -> `, getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]));
