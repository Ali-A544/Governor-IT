// Array of country objects
var countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
        language: "English",
        currency: "United States Dollar (USD)"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        language: "French",
        currency: "Euro (EUR)"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126476461,
        language: "Japanese",
        currency: "Japanese Yen (JPY)"
    }
];
// Print information about each country
countries.forEach(function (country) {
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("Language: ".concat(country.language));
    console.log("Currency: ".concat(country.currency, "\n"));
});
