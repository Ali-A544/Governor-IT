let guestList: string[] = ["Asad", "Ramzan", "Ali", "Uzair", "Abdullah", "Haris"];

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]`);
});

console.log("\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people.\n");

while (guestList.length > 2) {
    const removedGuest = guestList.pop(); // Remove the last guest
    console.log(`Sorry, ${removedGuest}, but we won't be able to accommodate you for dinner.`);
}

guestList.forEach(person => {
    console.log(`Dear ${person},\n\nYou are still cordially invited to dinner at my place. It would be an honor to have your company.\n\nSincerely, [Your Name]`);
});

guestList.pop();
guestList.pop();

console.log("Updated guest list:", guestList);