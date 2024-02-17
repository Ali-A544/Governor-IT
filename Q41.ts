function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Call the make_great function to modify the array of magicians
make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians);