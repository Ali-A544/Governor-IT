function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`the Great ${magicians[i]}`);
    }
    return great_magicians;
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Call the make_great function with a copy of the original array
let great_magicians: string[] = make_great([...magicians]);

// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);

console.log();

// Call the show_magicians function with the new array with "the Great" added
console.log("Great Magicians:");
show_magicians(great_magicians);
