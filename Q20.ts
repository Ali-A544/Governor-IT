// Array of country objects
let countries = [
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
countries.forEach(country => {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Language: ${country.language}`);
    console.log(`Currency: ${country.currency}\n`);
});
