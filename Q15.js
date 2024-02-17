var guestList = ["Leonardo da Vinci", "Marie Curie", "Albert Einstein"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]"));
});
console.log("\nGood news! We found a bigger dinner table!\n");
guestList.unshift("Isaac Newton"); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Nikola Tesla"); // Add to the middle
guestList.push("Ada Lovelace"); // Add to the end
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]"));
});
