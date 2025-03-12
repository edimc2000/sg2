/* p 26 task 1
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a new array
with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", "###"]
*/

console.log(' --- p 26 taks 1'); 
const noA = (arr) => {
    return arr.map(element => element[0].toLowerCase() === 'a' ? '###' : element);
}

console.log('noA(["javascript", "hello", "123", "xyz"])  -> ', noA(["javascript", "hello", "123", "xyz"])  );
console.log('noA(["apple", "123", "ABC", "javascript"])  -> ', noA(["apple", "123", "ABC", "javascript"])  );
console.log('noA(["apple", "abc", "ABC", "Alex", "A"])   -> ', noA(["apple", "abc", "ABC", "Alex", "A"]) );



/* p 26 task 2
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and will return
a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])       -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])             -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [10, 11, 100, 13, 14, 101]
*/

console.log(' --- p 26 taks 2'); 
const no3and5 = arr => {
    return arr.map ( element =>{
        return element % 5 === 0 && element % 3 === 0 ?  101
         : element % 5 === 0 ? 99
         : element % 3 === 0 ? 100
         : element
    });
}

console.log('no3and5([7, 4, 11, 23, 17])         -> ', no3and5([7, 4, 11, 23, 17])  );
console.log('no3and5([3, 4, 5, 6])               -> ', no3and5([3, 4, 5, 6])  );
console.log('no3and5([10, 11, 12, 13, 14, 15]    -> ', no3and5([10, 11, 12, 13, 14, 15]));



/* p 26 task 3
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new array
with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []
*/

console.log(' --- p 26 taks 3'); 
const no13 = arr => arr.map(element => element === 13 ? 0 : element);

console.log('no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]) -> ', no13([1, 2, 3 ,4]));
console.log('no13([13, 2, 3]) -> [0, 2, 3]       -> ', no13([13, 2, 3])  );
console.log('no13([13, 13, 13 , 13, 13])         -> ', no13([13, 13, 13 , 13, 13]));
console.log('no13([]) -> []                      -> ', no13([]) );

/* page 26 task 4
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new array
with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/

console.log(' --- p 26 taks 3'); 
const removeDuplicates = arr => [... new Set(arr)];

console.log('removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])             -> ', removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) );
console.log('removeDuplicates([1, 2, 5, 2, 3])                              -> ', removeDuplicates([1, 2, 5, 2, 3]) );
console.log('removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]           -> ', removeDuplicates([0, -1, -2, -2, -1]) );
console.log('removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])    -> ', removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) );
console.log('removeDuplicates(["1", "2", "3", "2", "3"])                    -> ', removeDuplicates(["1", "2", "3", "2", "3"])    );