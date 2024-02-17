function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt("Medium");

// Call the function to make a shirt of any size with a different message
make_shirt("Small", "Keep calm and code on!");
