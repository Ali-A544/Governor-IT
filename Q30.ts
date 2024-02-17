// Array of usernames
let usernames: string[] = [];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print a greeting to each user
    usernames.forEach(username => {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    });
} else {
    console.log("We need to find some users!");
}
