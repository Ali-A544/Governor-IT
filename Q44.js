function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        "manufacturer": manufacturer,
        "model": model
    };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and two other name-value pairs
var car_info_obj = car_info("Toyota", "Corolla", ["color", "red"], ["year", 2022]);
// Print the object to make sure all the information was stored correctly
console.log(car_info_obj);
