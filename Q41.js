function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Call the make_great function to modify the array of magicians
make_great(magicians);
// Call the show_magicians function to see the modified list
show_magicians(magicians);
