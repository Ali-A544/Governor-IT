let guestList: string[] = ["Leonardo da Vinci", "Marie Curie", "Alan Turing"];

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]`);
});

console.log("\nUnfortunately, Alan Turing can't make it to the dinner.\n");

guestList[guestList.indexOf("Alan Turing")] = "Albert Einstein";

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]`);
});
