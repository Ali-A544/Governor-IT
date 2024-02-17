let placesToVisit: string[] = ["Pakistan", "Paris", "Saudia Arabia", "UAE", "Bora Bora"];

console.log("Original order:", placesToVisit);

console.log("Alphabetical order:", [...placesToVisit].sort());

console.log("Original order (unchanged):", placesToVisit);

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

console.log("Original order (unchanged):", placesToVisit);

placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();
console.log("Original order (restored):", placesToVisit);

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
