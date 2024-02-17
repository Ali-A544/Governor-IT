let x: number = 5;
let y: number = 10;
let z: number = 5;
let isSunny: boolean = true;
let isRaining: boolean = false;
let fruit: string = "apple";
let color: string = "red";

console.log("Test 1: Is x equal to z? I predict True.");
console.log(x == z);

console.log("Test 2: Is x not equal to y? I predict True.");
console.log(x != y);

console.log("Test 3: Is y greater than x? I predict True.");
console.log(y > x);

console.log("Test 4: Is x less than y? I predict True.");
console.log(x < y);

console.log("Test 5: Is x greater than or equal to z? I predict True.");
console.log(x >= z);

console.log("Test 6: Is y less than or equal to x? I predict False.");
console.log(y <= x);

console.log("Test 7: Is it sunny AND not raining? I predict True.");
console.log(isSunny && !isRaining);

console.log("Test 8: Is it sunny OR raining? I predict True.");
console.log(isSunny || isRaining);

console.log("Test 9: Is the fruit an apple? I predict True.");
console.log(fruit == "apple");

console.log("Test 10: Is the color not blue? I predict True.");
console.log(color != "blue");
