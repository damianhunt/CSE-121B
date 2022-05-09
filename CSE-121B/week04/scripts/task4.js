/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let me = {

// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'Damian',
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/DamianPortrait.jpg',
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ['Burgers', 'Pizza', 'Braai'] ,
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ['Gaming', 'Gyming', 'Sport']
};
// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
me.placesLived = [
    {place: '14th Avenue', length: '1 Years'
    },
    {place:'16th avenue', length:'2 Years'
    },
    {place:'Hostel', length: '2 Years'
    },
]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = me.name; // or document.querySelector('#name').textContent = me.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = me.photo; // or document.querySelector('#photo').setAttribute('src', me.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = me.name; // or document.querySelector('#photo').setAttribute('alt', me.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
    //const favoriteFoodsHTML = me.favoriteFoods.map(function (item) {
    //    return `<li>${item}</li>`;
    //  });

me.favoriteFoods.forEach((food) => {
    let favoriteFoodElement = document.createElement('li');
    favoriteFoodElement.textContent = food;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    //document.getElementById('favorite-foods').innerHTML = favoriteFoodsHTML;
document.querySelector('#favorite-foods').appendChild(favoriteFoodElement);
});


// Step 6: Repeat Step 4 for each hobby in the hobbies property
    //const hobbiesHTML = me.hobbies.map(function (hobby) {
    //    return `<li>${hobby}</li>`;
    //  });
me.hobbies.forEach((hobby) => {
    let hobbyElement = document.createElement('li');
    hobbyElement.textContent = hobby;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    //document.getElementById('hobbies').innerHTML = hobbiesHTML;
    document.querySelector('#hobbies').appendChild(hobbyElement);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
me.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    


// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector('#places-lived').appendChild(placesLivedPlace);
document.querySelector('#places-lived').appendChild(placesLivedLength);
})
