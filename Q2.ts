let personName: string = "Ali Abdullah Balouch";

// Print in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print in titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
