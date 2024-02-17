// Array of numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(number => {
    // Determine the ordinal ending based on the number
    let ordinal_ending: string;
    if (number === 1) {
        ordinal_ending = "st";
    } else if (number === 2) {
        ordinal_ending = "nd";
    } else if (number === 3) {
        ordinal_ending = "rd";
    } else {
        ordinal_ending = "th";
    }

    // Print the number with its proper ordinal ending
    console.log(`${number}${ordinal_ending}`);
});
