var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great ".concat(magicians[i]));
    }
    return great_magicians;
}
// Array of magician's names
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
// Call the make_great function with a copy of the original array
var great_magicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
console.log();
// Call the show_magicians function with the new array with "the Great" added
console.log("Great Magicians:");
show_magicians(great_magicians);
