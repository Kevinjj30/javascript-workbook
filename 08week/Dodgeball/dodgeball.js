const arrOfPeople = [
	{
		id: 2,
		name: "Charles Young",
		age: 55,
		skillSet: "welding",
		placeBorn: "Omaha, Nebraska"
	},
	{
		id: 3,
		name: "Judy Twilight",
		age: 35,
		skillSet: "fishing",
		placeBorn: "Louisville, Kentucky"
	},
	{
		id: 4,
		name: "Cynthia Doolittle",
		age: 20,
		skillSet: "tic tac toe",
		placeBorn: "Pawnee, Texas"
	},
	{
		id: 5,
		name: "John Willouby",
		age: 28,
		skillSet: "pipe fitting",
		placeBorn: "New York, New York" //test
	},
	{
		id: 6,
		name: "Stan Honest",
		age: 20,
		skillSet: "boom-a-rang throwing",
		placeBorn: "Perth, Australia"
	},
	{
		id: 7,
		name: "Mia Watu",
		age: 17,
		skillSet: "acrobatics",
		placeBorn: "Los Angeles, California"
	},
	{
		id: 8,
		name: "Walter Cole",
		age: 32,
		skillSet: "jump rope",
		placeBorn: "New Orleans, Louisiana"
	}
];

const listofPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
	constructor(person) {
		this.person = person;
		this.isPlayer = false;
		this.color = null;
	}
}

class BlueTeammate extends Player {
	constructor(player) {
		super(player.person);
		this.color = "blue";
	}
}

class RedTeammate extends Player {
	constructor(player) {
		super(player.person);
		this.color = "red";
	}
}

const listPeopleChoices = () => {
	const listElement = document.getElementById("people");
	listElement.innerHTML = "";
	arrOfPeople
		.filter(person => !person.isPlayer) // filters if a person is a player.
		.map(person => {
			const li = document.createElement("li");
			const button = document.createElement("button");
			button.innerHTML = "Make a Player";
			button.addEventListener("click", function() {
				makePlayer(person.id); //makes the player
			});
			li.appendChild(button);
			li.appendChild(
				document.createTextNode(person.name + " - " + person.skillSet)
			);
			listElement.append(li);
		});
};

function makePlayer(id, skillSet) {
	//function that actually makes the player
	arrOfPeople.forEach((person, index) => {
		if (person.id === id) {
			let newplayer = new Player(person);
			listofPlayers.push(newplayer); //pushes selected player
			newplayer.isPlayer = true;
			arrOfPeople.splice(index, 1);
			listPlayer();
			listPeopleChoices();
		}
	});
}

function listPlayer() {
	document.getElementById("players").innerHTML = "";
	listofPlayers.map(player => {
		const listPlayerEle = document.getElementById("players");
		const li = document.createElement("li");
		const redButton = document.createElement("button");
		redButton.innerHTML = "Red Team";
		const xButton = document.createElement("button");
		xButton.innerHTML = "X";
		xButton.addEventListener("click", function() {
			xButton.remove();
			li.remove();
		});

		redButton.addEventListener("click", function() {
			redteam(player.person.id.name);
		});

		li.appendChild(redButton);

		const blueButton = document.createElement("button");
		blueButton.innerHTML = "Blue Team";
		blueButton.addEventListener("click", function() {
			blueteam(player.person.id);
		});

		li.appendChild(blueButton);
		li.appendChild(document.createTextNode(player.person.name));
		li.appendChild(xButton);
		console.log(li, "test");
		listPlayerEle.append(li);
	});
}

function blueteam(id) {
	document.getElementById("blue").innerHTML = "";
	listofPlayers.map(player => {
		const listPlayerEle = document.getElementById("blue");
		const li = document.createElement("li");
		const xButton = document.createElement("button");
		xButton.innerHTML = "X";
		xButton.addEventListener("click", function() {
			xButton.remove();
			li.remove();
		});
		li.appendChild(document.createTextNode(player.person.name));
		li.appendChild(xButton);
		listPlayerEle.append(li);
	});
}

function redteam(id) {
	document.getElementById("red").innerHTML = "";
	listofPlayers.map(player => {
		const listPlayerEle = document.getElementById("red");
		const li = document.createElement("li");
		const xButton = document.createElement("button");
		xButton.innerHTML = "X";
		xButton.addEventListener("click", function() {
			xButton.remove();
			li.remove();
		});
		li.appendChild(document.createTextNode(player.person.name));
		li.appendChild(xButton);
		listPlayerEle.append(li);
	});
}

//   blueTeam.push(listofPlayers[id - 2]);
// const li = document.createElement("li");
//   blueteam.map(player => {
//     const blueRoster = document.createElement("li");
//     blueRoster.append(li);
//     console.log(blueRoster);
//   });
// }

// ("use strict");

// let assert = require("assert");

// let jobTypes = {
// 	pilot: "MAV",
// 	mechanic: "Repair Ship",
// 	commander: "Main Ship",
// 	programmer: "Any Ship!"
// };

// class CrewMember {
// 	constructor(name, job, specialSkill, ship) {
// 		this.name = name;
// 		this.job = job;
// 		this.specialSkill = specialSkill;
// 		this.ship = ship;
// 	}

// 	enterShip(shipParm) {
// 		this.ship = shipParm.name;
// 		shipParm.crew.push(this);
// 	}
// }

// class Ship {
// 	constructor(name, type, ability, crew) {
// 		this.name = name;
// 		this.type = type;
// 		this.ability = ability;
// 		this.crew = [];
// 	}

// 	missionStatement() {
// 		if (this.crew.length > 0) {
// 			return this.ability;
// 		} else {
// 			return "Can't perform a mission yet.";
// 		}
// 	}
// }

// //tests
// if (typeof describe === "function") {
// 	describe("CrewMember", function() {
// 		it("should have a name, a job, a specialSkill and ship upon instantiation", function() {
// 			var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
// 			assert.equal(crewMember1.name, "Rick Martinez");
// 			assert.equal(crewMember1.job, "pilot");
// 			assert.equal(crewMember1.specialSkill, "chemistry");
// 			assert.equal(crewMember1.ship, null);
// 		});

// 		it("can enter a ship", function() {
// 			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
// 			let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
// 			crewMember1.enterShip(mav);
// 			assert.equal(crewMember1.ship, "Mars Ascent Vehicle");
// 			assert.equal(mav.crew.length, 1);
// 			assert.equal(mav.crew[0], crewMember1);
// 		});
// 	});

// 	describe("Ship", function() {
// 		it("should have a name, a type, an ability and an empty crew upon instantiation", function() {
// 			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
// 			assert.equal(mav.name, "Mars Ascent Vehicle");
// 			assert.equal(mav.type, "MAV");
// 			assert.equal(mav.ability, "Ascend into low orbit");
// 			assert.equal(mav.crew.length, 0);
// 		});

// 		it("can return a mission statement correctly", function() {
// 			let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
// 			let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
// 			let hermes = new Ship(
// 				"Hermes",
// 				"Main Ship",
// 				"Interplanetary Space Travel"
// 			);
// 			let crewMember2 = new CrewMember(
// 				"Commander Lewis",
// 				"commander",
// 				"geology"
// 			);
// 			assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
// 			assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

// 			crewMember1.enterShip(mav);
// 			assert.equal(mav.missionStatement(), "Ascend into low orbit");

// 			crewMember2.enterShip(hermes);
// 			assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
// 		});
// 	});
// }
