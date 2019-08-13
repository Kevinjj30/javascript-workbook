"use strict";

function catchError(result) {
	if (!result.ok) {
		throw Error(result.message);
	}
	return result;
}
function getAPI() {
	fetch("https://randomuser.me/api/?results=500")
		.then(result => result.json())
		.then(data => {
			let output = `<h2>Friends</h2>`;
			data.results.forEach(function(user) {
				output += `
          <img src = "${user.picture.medium}" alt = "faces">
              <ul>
                  <li>${user.name.first} ${user.name.last}</li>
                  <li>${user.location.city}, ${user.location.state}</li>
                  <li>${user.email}</li>
              </ul>
          `;
			});
			document.getElementById("container").innerHTML = output;
		});
}
