// List of current users
var current_users = ["john", "alice", "bob", "emma", "charlie"];
// List of new users
var new_users = ["emily", "Alice", "mike", "bob", "sarah"];
// Convert current_users to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through new_users to check for uniqueness
new_users.forEach(function (new_user) {
    // Convert new_user to lowercase for case-insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    // Check if new_user is in current_users_lower
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_user, "' is available."));
    }
});
