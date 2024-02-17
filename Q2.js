var personName = "Ali Abdullah Balouch";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
