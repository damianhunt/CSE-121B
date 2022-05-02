/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const Name = 'Damian Hunt'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = Name;

// Step 3: declare and instantiate a variable to hold the current year
const Year = 2022

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = Year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const Picture = 'images/DamianPortrait.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#img').setAttribute('src', Picture);
document.querySelector('#img').setAttribute('alt', 'Photo');

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favouriteFood = ['Burgers','Pasta','Roast Chicken'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favouriteFood;

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavouriteFood = ['Braai Meat'];

// Step 4: add the variable holding another favorite food to the favorite food array
favouriteFood.push(anotherFavouriteFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favouriteFood;

// Step 6: remove the first element in the favorite foods array
favouriteFood.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favouriteFood;

// Step 8: remove the last element in the favorite foods array
favouriteFood.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favouriteFood;


