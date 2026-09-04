console.log("Hello world.");
console.log("From script.js file.");

const myName = "tharver fuentes";
let age = 20;
const number = "090946300889";
const address = "Victorias City";

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);
console.log(67);

function greet(greetings, names = []) {
    if (Array.isArray(names)) {
        names = names.join(", ");
    }
    return `${greetings} sa enyu ${names}`;
}
console.log(greet("Mayung aga", ["Mark", "papalada", "yambot", "mamalada", "moew"]));


const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const servicesHeadingHeading = document.querySelector("#services h2");
console.log(servicesHeadingHeading);