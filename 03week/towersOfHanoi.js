"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
	// This moves the pieces from one stack to another, this function was the easiest part for me.
	stacks[endStack].push(stacks[startStack].pop());
}

function isLegal(startStack, endStack) {
	//legal moves took the longest for me to understand this alot of googling hack overflow and stack overflow
	if (
		stacks[startStack][stacks[startStack].length - 1] === undefined &&
		stacks[startStack][stacks[endStack].length - 1] === undefined
	) {
		return false;
	} else if (
		stacks[startStack][stacks[startStack].length - 1] <
			stacks[endStack][stacks[endStack].length - 1] ||
		stacks[endStack][stacks[endStack].length - 1] === undefined
	) {
		return true;
	} else {
		//illegal moves if does not equal above if statements
		console.log("Invalid move");
		return false;
	}
}

function checkForWin() {
	//checks for win the second easiest for to me figure it out while writing.
	if (stacks.b.length === 4) {
		return true;
	} else {
		return false;
	}
}

function towersOfHanoi(startStack, endStack) {
	// Runs and ends the game. Also removing spacing and capitol letters.
	let newStart = startStack.toLowerCase().trim();
	let newEnd = endStack.toLowerCase().trim();
	if (isLegal(startStack, endStack)) {
		movePiece(newStart, newEnd);
		checkForWin();
	}
}

function getPrompt() {
	printStacks();
	rl.question("start stack: ", startStack => {
		rl.question("end stack: ", endStack => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === "function") {
	describe("#towersOfHanoi()", () => {
		it("should be able to move a block", () => {
			towersOfHanoi("a", "b");
			assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
		});
	});

	describe("#isLegal()", () => {
		it("should not allow an illegal move", () => {
			stacks = {
				a: [4, 3, 2],
				b: [1],
				c: []
			};
			assert.equal(isLegal("a", "b"), false);
		});
		it("should allow a legal move", () => {
			stacks = {
				a: [4, 3, 2, 1],
				b: [],
				c: []
			};
			assert.equal(isLegal("a", "c"), true);
		});
	});
	describe("#checkForWin()", () => {
		it("should detect a win", () => {
			stacks = { a: [], b: [4, 3, 2, 1], c: [] };
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});
} else {
	getPrompt();
}
