"use strict";

function pigLatin() {
	let newWord = document.getElementById("enterhere").value;
	newWord = newWord.trim().toLowerCase();
	const vowels = ["a", "e", "i", "o", "u"];

	let vowelIndex = 0;
	let finish;

	if (vowels.includes(newWord[0])) {
		finish = newWord + "yay";
	} else {
		for (let char of newWord) {
			if (vowels.includes(char)) {
				vowelIndex = newWord.indexOf(char);
				break;
			}
		}

		finish = newWord.slice(vowelIndex) + newWord.slice(0, vowelIndex) + "ay";
	}
	document.getElementById("output").innerHTML = finish;
}
