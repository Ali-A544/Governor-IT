var guestList = ["Leonardo da Vinci", "Marie Curie", "Albert Einstein"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]"));
});
console.log("Total number of people invited to dinner: ".concat(guestList.length));
