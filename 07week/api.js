// // document.getElementById("getAPI").addEventListener('click', getAPI)
// const ul = document.getElementById("authors"); // Get the list where we will place our authors
// const url = "https://randomuser.me/api/?results=10";
// let data = {
// 	name: "Sara"
// };
// // The parameters we are gonna pass to the fetch function
// let fetchData = {
// 	method: "POST",
// 	body: data,
// 	headers: new Headers()
// };
// fetch(url, fetchData);
// function createNode(element) {
// 	return document.createElement(element); // Create the type of element you pass in the parameters
// }

// function append(parent, el) {
// 	return parent.appendChild(el); // Append the second parameter(element) to the first one
// }

// // function getAPI(){
// fetch("https://randomuser.me/api/")
// 	.then(res => res.json())
// 	.then(data => {
// 		let authors = data.results; // Get the results
// 		return authors.map(function(author) {
// 			// Map through the results and for each run the code below
// 			let li = createNode("li"), //  Create the elements we need
// 				img = createNode("img"),
// 				span = createNode("span");
// 			img.src = author.picture.medium; // Add the source of the image to be the src of the img element
// 			span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
// 			append(li, img); // Append all our elements
// 			append(li, span);
// 			append(ul, li);
// 		return authors
// 		});
// 	});

// document.getElementById("getAPI").innerHTML = output;

// document.getElementById("getAPI").addEventListener("click", getAPI);

function getAPI() {
	fetch("https://randomuser.me/api/")
		.then((res) => res.json())
		.then((data) => {
			let output = "<h2> Api Posts </h2>";
			data.forEach(function(post) {
				output += `

			<ul>
			<li> Title: ${post.title}</li>
			<li> Body: ${post.title}</li>
			</ul>
		`;
			});

			document.getElementById("input").innerHTML = output;
		});
}
