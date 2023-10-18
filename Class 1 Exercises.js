/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

//pizza sizes 
const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;

//caculate the areas

const SMALL_PIZZA_RADIUS = SMALL_PIZZA_DIAMETER / 2;
const SMALL_PIZZA_AREA = Math.PI * (SMALL_PIZZA_RADIUS ** 2);

const LARGE_PIZZA_RADIUS = LARGE_PIZZA_DIAMETER / 2:
const LARGE_PIZZA_AREA = Math.PI * (LARGE_PIZZA_RADIUS ** 2);

// 2. What is the cost per square inch of each pizza?

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
//Random Card problem

const LOWEST_CARD = 1
const HIGHEST_CARD = 13

const card1 = Math.ceil(Math.random() * HIGHEST_CARD)
const card2 = Math.ceil(Math.random() * HIGHEST_CARD)
const card3 = Math.ceil(Math.random() * HIGHEST_CARD)

const highestCard = Math.max(card1,card2,card3)

console.log("highest card is", highestCard)

// 4. Draw 3 cards and use Math to determine the highest
// card

// Simulate drawing three cards
const card1 = Math.floor(Math.random() * 13) + 2;  // Values from 2 to 14 (Ace)
const card2 = Math.floor(Math.random() * 13) + 2;
const card3 = Math.floor(Math.random() * 13) + 2;

console.log(`Card 1: ${card1}`);
console.log(`Card 2: ${card2}`);
console.log(`Card 3: ${card3}`);

// Determine the highest card
const highestCard = Math.max(card1, card2, card3);

console.log(`The highest card is: ${highestCard}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = "John";
const lastName = "Doe"; 
const streetAddress = "123 Main Street";
const city = "Anytown";
const state = "CA";
const zipCode = "12345";

const addressBlock = `${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`;

console.log(addressBlock);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

const inputString = "JohnDoe\n123 Main Street\nAnytown, CA 12345";

// Find the position of the first line break
const firstLineBreakIndex = inputString.indexOf('\n');

// Extract the first name using slice
const firstName = inputString.slice(0, firstLineBreakIndex);

console.log(`First Name: ${firstName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);

// Define the two dates
const startDate = new Date('2020-01-01 00:00:00');
const endDate = new Date('2020-04-01 00:00:00');

// Calculate the middle date
const middleDate = new Date(startDate.getTime() + (endDate.getTime() - startDate.getTime()) / 2);

console.log(`Middle Date: ${middleDate.toLocaleString()}`);
