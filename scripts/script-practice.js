// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Hello World")
// });

// document.addEventListener("DOMContentLoaded", helloWorld());

// function helloWorld() {
//     console.log("Hello World")
// }

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Hello World")
// });

// function showMessage(message, time) {
//     console.log(message, time)
// };

// showMessage('Hello World', '9:00am');
// showMessage('Goodbye World', '9:00pm');

// let showMessage = (message, time) => {
//     console.log(message, time)
// };

// showMessage('Hello World', '9:00am');
// showMessage('Goodbye World', '9:00pm');

// const carModel = 'Ford';
// const carModel2 = {make: 'Ford'}
// console.log(carModel === carModel2.make)

// const object = {
//     firstname: 'eric',
//     lastname: 'oboyle',
//     age: 31,
//     car: {
//         make: carModel,
//         model: 'F150'
//     }
// };

// const object2 = {
//     firstname: 'eric',
//     lastname: 'oboyle',
//     age: 31,
//     car: {
//         make: carModel,
//         model: 'F150'
//     }
// };

// const object3 = object2;

// console.log(object.car.make);

// let firstName = 'eric';
// console.log(firstName == object.firstname);

// console.log(object === object2);

// console.log(object.firstname === object2.firstname);

// console.log(object2 === object3);

// let num1 = 50;
// let num2 = '50';

// console.log(num1 === parseInt(num2));

// const person = {
//     firstName: 'eric',
//     "job title": "senior engineer"
// } 
// person.firstName = 'taylor';
// person.firstName = 'chris';

// console.log(person);
// console.log(person['job title']);

// let favoriteFoods = [ 'pizza', 'burgers', 'chicken'];

// console.log(favoriteFoods[0]);

// console.log(favoriteFoods.length);

// console.log(favoriteFoods[0].length);

// console.log(favoriteFoods.reverse());

// console.log(favoriteFoods[0].split('').reverse().join(''));

// favoriteFoods[1] = 'steak';

// favoriteFoods.push('tacos');

// console.log(favoriteFoods);

// console.log(favoriteFoods[3] === 'tacos'); 

// let links = document.querySelectorAll('a');

// // console.log(links);

// links.forEach((link) => {
//     // link.style.backgroundColor = 'red'
//     // link.classList.add('dark-mode')
//     // link.classList.remove('btn')
//     let oldText = link.innerText
//     let oldColor = link.style.backgroundColor
//     link.addEventListener('click', (event) => {
//        event.preventDefault()
//        console.log(event.target)
       
//        event.target.style.backgroundColor = 'red'
//        event.target.innerText = 'clicked!'
//        setTimeout(() => {
//         event.target.innerText = oldText 
//         event.target.style.backgroundColor = oldColor
//         event.target.removeAttribute('disabled')
//        }, 1000)
//     })
// });


