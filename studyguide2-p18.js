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

console.log('--- page 18 - task 1 - version 1'); 
const averageOfEdges = (num1, num2, num3) => (Math.min(num1, num2, num3) + Math.max(num1, num2, num3)) / 2;

console.log('averageOfEdges(0, 0, 0)    -> ', averageOfEdges(0, 0, 0));
console.log('averageOfEdges(0, 0, 6)    -> ', averageOfEdges(0, 0, 6));
console.log('averageOfEdges(-2, -2, 10) -> ', averageOfEdges(-2, -2, 10));
console.log('averageOfEdges(-3, 15, -3) -> ', averageOfEdges(-3, 15, -3));
console.log('averageOfEdges(10, 13, 20) -> ', averageOfEdges(10, 13, 20));

console.log('\n--- page 18 - task 1 VERSION 2 using rest parameter and spread' ); 
const averageOfEdges2 = (...theArgs) => (Math.max(...theArgs) + Math.min(...theArgs)) / 2;


let arrayOfGivens = [ [0,0,0], [0, 0, 6], [-2, -2, 10], [-3, 15, -3], [10, 13, 20]]; 
for(const element of arrayOfGivens) {
    console.log(`averageOfEdges2(${element[0]}, ${element[1]}, ${element[2]})`.padEnd(30, ' '),'->', averageOfEdges2(element[0], element[1], element[2]));
}


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

console.log('\n--- page 18 - task 2 version 1'); 
const replaceFirstLast = (string) => string.trim().length < 2 ?  '' 
: string.trim().length === 3 ?  string.trim().at(-1) +string.trim().at(1)+ string.trim().at(0)
: string.trim().at(-1) + string.trim().slice(1, string.length - 1) +  string.trim().at(0); 

console.log('replaceFirstLast("")            ->', replaceFirstLast(""));
console.log('replaceFirstLast("Hello")       ->', replaceFirstLast("Hello"));
console.log('replaceFirstLast("Tech Global") ->', replaceFirstLast("Tech Global"));
console.log('replaceFirstLast("A")           ->', replaceFirstLast("A"));
console.log('replaceFirstLast(" A ")         ->', replaceFirstLast(" A "));
console.log('replaceFirstLast(" ABC ")       ->', replaceFirstLast(" ABC "));

console.log('\n\n--- page 18 - task 2 version 2'); 
const replaceFirstLast2 = string => string.trim().length < 2 ? '' 
: string.trim().split('').map((element, i, arr) => i === 0 ? arr[arr.length - 1] 
: i === arr.length - 1 ? arr[0] 
: element).join('');
    
arrayOfGivens = [ '', 'Hello', 'Tech Global', 'A', ' A ', ' ABC ']; 
for(const element of arrayOfGivens) {
    console.log(`replaceFirstLast2(${element})`.padEnd(30, ' '),'->', replaceFirstLast2(element));
}

console.log('\n\n--- page 18 - task 2 version 3 destructuring'); 
const replaceFirstLast3 = string => {
    let strArr = string.trim().split(''); 
    if (strArr.length < 2) return '';
    [strArr[0], strArr[strArr.length-1]] = [ strArr[strArr.length-1], strArr[0]];
    return strArr.join('');
}

for(const element of arrayOfGivens) {
    console.log(`replaceFirstLast2(${element})`.padEnd(30, ' '),'->', replaceFirstLast3(element));
}



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
console.log('--- page 18 - task 3');  //improved version
const swap4 = string => string.trim().length >= 8 ? string.slice(-4) + string.slice(4, - 4) + string.slice(0, 4) : '';

console.log('swap4("abc")        -> ', swap4("abc") );
console.log('swap4("JavaScript") -> ', swap4("JavaScript") );
console.log('swap4("TechGlobal") -> ', swap4("TechGlobal") );
console.log('swap4("")           -> ', swap4("") );
console.log('swap4(" ")          -> ', swap4(" ") );
console.log('swap4("Apple")      -> ', swap4("Apple") );
console.log('swap4("12345678")      -> ', swap4("12345678") );

