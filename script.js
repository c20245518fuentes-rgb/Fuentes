console.log("Hello world.");
console.log("From script.js file.");

const myName = "Tharver";
let age = 60;
const number = "09936898115";
const address = "Victorias City Brgy 6-A Zone 3 Pasil";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);


function greet(greeting, names = []) {
	if (Array.isArray(names)) {
		names = names.join(", ");
	}
	return `${greeting} sa enyu ${names}`;
}
console.log(greet("Mayung aga", ["Mark", "Bai", "Soy", "Tol", "Erp"]));

