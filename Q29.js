// Array of usernames
var usernames = ["admin", "Eric", "Alice", "Bob", "John"];
// Loop through the array and print a greeting to each user
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
