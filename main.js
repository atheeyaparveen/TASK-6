//The value saved to kelvin will stay constant ie 293

const kelvin=293;

// celsius is a constant which we got by subtracting 273 from kelvin
const celsius= kelvin - 273;
// we have stored celsius multiply by(9/5)+32 result in fahrenheit
let fahrenheit = celsius * (9/5) + 32
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature and save the result to the fahrenheit variable.
fahrenheit= Math.floor(fahrenheit);

//Temperature in Newton Scale (convert from Celsius)
//Use Math.floor() method to round number to whole number
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} TEMPERATURE degrees Fahrenheit.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);