function car_info(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    let car: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and two other name-value pairs
let car_info_obj = car_info("Toyota", "Corolla", ["color", "red"], ["year", 2022]);

// Print the object to make sure all the information was stored correctly
console.log(car_info_obj);
