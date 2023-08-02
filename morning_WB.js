//Title: Find Indexes of Capital Letters

//Problem Statement:
//Write a JavaScript function that takes a single string (word) as an argument. The function should return an ordered list containing the indexes of all capital letters in the string.

//console.log(findIndexesOfCapitalLetters("CodEWaRs")); // Output: [0, 3, 4, 6]

//Explanation:
//For the input "CodEWaRs", the capital letters are "C", "E", "W", and "R". Their corresponding indexes in the word are 0, 3, 4, and 6, which are returned in the array [0, 3, 4, 6].

//Remarks:
/* 
Make sure to handle edge cases, such as an empty string or a string with no capital letters.
The function should return an empty array if there are no capital letters in the input string.
The function should handle strings with special characters or non-letter characters as well, and only consider uppercase letters as capital letters.
Encourage students to use appropriate JavaScript array methods or loops to efficiently solve the problem.
 */

function findIndexesOfCapitalLetters(arr){
    let indexes = []
    for(let i = 0; i < arr.length; i++){
        if(arr.charCodeAt(i) >= 65 && arr.charCodeAt(i) <= 90){
            indexes.push(i)
        }
    }
    return indexes
}

console.log(findIndexesOfCapitalLetters("CodEWaRs"));
console.log(findIndexesOfCapitalLetters("alllowercase"));
console.log(findIndexesOfCapitalLetters("*&^$@#C"));
console.log(findIndexesOfCapitalLetters("ALLCAPITALS"));
console.log(findIndexesOfCapitalLetters("HeLLo_World"));
console.log(findIndexesOfCapitalLetters(""));
