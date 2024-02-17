function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}
// Call the function three times with a different number of arguments each time
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
make_sandwich("Peanut butter", "Jelly");
