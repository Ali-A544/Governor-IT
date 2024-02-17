// List of current users
let current_users: string[] = ["john", "alice", "bob", "emma", "charlie"];

// List of new users
let new_users: string[] = ["emily", "Alice", "mike", "bob", "sarah"];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

// Loop through new_users to check for uniqueness
new_users.forEach(new_user => {
    // Convert new_user to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();

    // Check if new_user is in current_users_lower
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations, the username '${new_user}' is available.`);
    }
});
