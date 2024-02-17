// Array of numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    // Determine the ordinal ending based on the number
    var ordinal_ending;
    if (number === 1) {
        ordinal_ending = "st";
    }
    else if (number === 2) {
        ordinal_ending = "nd";
    }
    else if (number === 3) {
        ordinal_ending = "rd";
    }
    else {
        ordinal_ending = "th";
    }
    // Print the number with its proper ordinal ending
    console.log("".concat(number).concat(ordinal_ending));
});
