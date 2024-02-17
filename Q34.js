// Array of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\n");
// Print a statement about each animal
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("\n");
// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
