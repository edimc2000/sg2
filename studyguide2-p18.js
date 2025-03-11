/* task 
Average of Edges
 Write a function named averageOfEdges() which takes three number arguments and will return
 average of min and max numbers.
Examples:
 averageOfEdges(0, 0, 0)    -> 0
 averageOfEdges(0, 0, 6)    -> 3
 averageOfEdges(-2, -2, 10) -> 4
 averageOfEdges(-3, 15, -3) -> 6
 averageOfEdges(10, 13, 20) -> 15
*/

console.log('--- page 18 - task 1'); 

const averageOfEdges = (num1, num2, num3) => (num1 + num3) / 2;

console.log('averageOfEdges(0, 0, 0)    -> ', averageOfEdges(0, 0, 0));
console.log('averageOfEdges(0, 0, 6)    -> ', averageOfEdges(0, 0, 6));
console.log('averageOfEdges(-2, -2, 10) -> ', averageOfEdges(-2, -2, 10));
console.log('averageOfEdges(-3, 15, -3) -> ', averageOfEdges(-3, 15, -3));
console.log('averageOfEdges(10, 13, 20) -> ', averageOfEdges(10, 13, 20));


/* task 
Swap First and Last Characters
 Write a function named replaceFirstLast() which takes a string argument and returns a new string with
 the first and last characters replaced.
 NOTE: If the length is less than 2, return an empty string.
 NOTE: Ignore extra spaces before and after the string.
Examples:
 replaceFirstLast("")            -> ""
 replaceFirstLast("Hello")       -> "oellH"
 replaceFirstLast("Tech Global") -> "lech GlobaT"
 replaceFirstLast("A")           -> ""
 replaceFirstLast(" A ")         -> ""
*/

console.log('--- page 18 - task 2'); 
const replaceFirstLast = (string) => string.trim().length < 2 ?  '' 
: string.trim().length === 3 ?  string.trim().at(-1) +string.trim().at(1)+ string.trim().at(0)
: string.trim().at(-1) + string.trim().slice(1, string.length - 1) +  string.trim().at(0); 

console.log('replaceFirstLast("")            ->', replaceFirstLast(""));
console.log('replaceFirstLast("Hello")       ->', replaceFirstLast("Hello"));
console.log('replaceFirstLast("Tech Global") ->', replaceFirstLast("Tech Global"));
console.log('replaceFirstLast("A")           ->', replaceFirstLast("A"));
console.log('replaceFirstLast(" A ")         ->', replaceFirstLast(" A "));
console.log('replaceFirstLast(" ABC ")       ->', replaceFirstLast(" ABC "));


/* Task
Swap First and Last Four Characters
 Write a function named as swap4() which takes a string word as an argument and returns the string
 back with its first and last 4 characters swapped when invoked.
 NOTE: Return empty string if the given string does not have 8 or more characters.
Examples:
 swap4("abc")        -> ""
 swap4("JavaScript") -> "riptScJava"
 swap4("TechGlobal") -> "obalGlTech"
 swap4("")           -> ""
 swap4(" ")          -> ""
 swap4("Apple")      -> ""
*/
console.log('--- page 18 - task 3'); 
const swap4 = string => string.trim().length > 8 ?   string.slice(string.length-4) + string.slice(4,string.length-4) + string.slice(0,4)
 : string.trim().length === 8 ?  string.slice(string.length-4) +string.slice(0,4)
 : ''

console.log('swap4("abc")        -> ', swap4("abc") );
console.log('swap4("JavaScript") -> ', swap4("JavaScript") );
console.log('swap4("TechGlobal") -> ', swap4("TechGlobal") );
console.log('swap4("")           -> ', swap4("") );
console.log('swap4(" ")          -> ', swap4(" ") );
console.log('swap4("Apple")      -> ', swap4("Apple") );
console.log('swap4("12345678")      -> ', swap4("12345678") );

