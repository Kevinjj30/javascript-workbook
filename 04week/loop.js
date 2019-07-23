// 1. Use a do...while loop to console.log the numbers from 1 to 1000.

let i = 0;
do {
	i++;
	console.log(i);
} while (i < 1001);

// 2. Create an object (an array with keys and values) called person with the following data:

var array = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
};
// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
let o = parseInt(array.birthDate[array.birthDate.length - 1]);
console.log(o); // line 20 is singling out the line in the array, the text in the brackets [] is singling out the index in the

for (array.birthDate in array) {
	if (o % 2 == !0) {
		console.log(o);
		break;
	} else {
		console.log("not an odd number");
		break;
	}
}
// 4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [
	{
		firstName: "Jane",
		lastName: "Doe",
		birthDate: "Jan 5, 1925",
		gender: "female"
	},
	{
		firstName: "Kevin",
		lastName: "Jenkins",
		birthDate: "Jul 9, 1988",
		gender: "male"
	},
	{
		firstName: "Genice",
		lastName: "Ferguson",
		birthDate: "Apr 20, 2019",
		gender: "female"
	},
	{
		firstName: "Kylie",
		lastName: "Jade",
		birthDate: "Apr 29, 2014",
		gender: "female"
	}
];

// #5 Use .map() to map over the arrayOfPersons and console.log() their information.

// arrayOfPersons.map(element => {
// console.log(element);
// })

// #6 Use .filter() to filter the persons array and console.log only males in the array.

// arrayOfPersons.filter(sex =>{ //sex => is the same as writing (function(sex))
//   if(sex.gender == "male"){
//     console.log(sex.firstName + " " + sex.lastName);
//   }
// });

// #7 Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// let date = (arrayOfPersons.birthDate [arrayOfPersons.birthDate.length]);
// console.log(date);

// let date = arrayOfPersons.filter(birthday =>{
//   if(birthday.birthDate. < 1990){
//     console.log()
//   }
// });

let date = arrayOfPersons.filter(birthYear => {
	//fat arrow function that accomplishes the same function Grant specified
	let r = /[' ']\d{4}/;

	let stringElements = birthYear.birthDate;

	//now that stringElements is a string, I can use match() to compare the value to my regex criteria.
	if (stringElements.match(r) <= 1990) {
		console.log(birthYear.firstName + " " + birthYear.lastName);
	}
});
