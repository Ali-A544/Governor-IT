let country: string = "Canada";
console.log("Test 11: Is the country Canada? I predict True.");
console.log(country == "Canada");

console.log("Test 12: Is the country not Australia? I predict False.");
console.log(country != "Australia");

let city: string = "New York";
console.log("Test 13: Is the city lowercase? I predict True.");
console.log(city.toLowerCase() === "new york");

let a: number = 10;
let b: number = 20;

console.log("Test 14: Is a equal to b? I predict False.");
console.log(a == b);

console.log("Test 15: Is a not equal to b? I predict True.");
console.log(a != b);

console.log("Test 16: Is a greater than b? I predict False.");
console.log(a > b);

console.log("Test 17: Is a less than b? I predict True.");
console.log(a < b);

console.log("Test 18: Is a greater than or equal to b? I predict False.");
console.log(a >= b);

console.log("Test 19: Is a less than or equal to b? I predict True.");
console.log(a <= b);

let isSunnyToday: boolean = true;
let isWarm: boolean = true;
console.log("Test 20: Is it sunny and warm? I predict True.");
console.log(isSunnyToday && isWarm);

let isRainingToday: boolean = true;
console.log("Test 21: Is it sunny or raining? I predict True.");
console.log(isSunnyToday || isRainingToday);

let fruits: string[] = ["apple", "banana", "orange"];
console.log("Test 22: Is 'banana' in the array? I predict True.");
console.log(fruits.includes("banana"));

console.log("Test 23: Is 'grape' not in the array? I predict False.");
console.log(!fruits.includes("grape"));
