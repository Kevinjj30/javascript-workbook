"use strict";

// function catchError(result) {
// 	if (!result.ok) {
// 		throw Error(result.message);
// 	}
// 	return result;
// }

// function getAPI() {
// 	fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
// 		.then(abilities => abilities.json())
// 		.then(data => {
// 			let output = `<h2>Pokemon</h2>`;
// 			data.abilities.foreach(function(user) {
// 				output += `
//           <ul>
//                   <li>${user.ability.name} ${user.name.last}</li>
//                   <li>${user.location.city}, ${user.location.state}</li>
//                   <li>${user.email}</li>
//               </ul>
//           `;
// 			});
// 			document.getElementById("container").innerHTML = output;
// 		});
// }

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto/", true);

request.onload = function() {
	// Begin accessing JSON data here
	var data = ability.json;

	data.forEach(abilities => {
		// Log each movie's title
		console.log(ability.ability);
	});
};

// Send request
request.send();
