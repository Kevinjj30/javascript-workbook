"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

class Board {
	constructor() {
		this.grid = [];
		this.checkers = [];
		this.redPiece = "X";
		this.blackPiece = "O";
		this.playerTrn = this.blackPiece;
	}

	initializeGrid() {
		for (let row = 0; row < 3; row++) {
			for (let column = 0; column < 8; column++) {
				if (column % 2 === 1 && row % 2 === 0) {
					this.grid[row][column] = this.redPiece;
					this.checkers.push(this.redPiece);
				} else if (column % 2 === 0 && row % 2 === 1) {
					this.grid[row][column] = this.redPiece;
					this.checkers.push(this.redPiece);
				}
			}
		}
		for (let row = 5; row < 8; row++) {
			for (let column = 0; column < 8; column++) {
				if (column % 2 === 1 && row % 2 === 0) {
					this.grid[row][column] = this.blackPiece;
					this.checkers.push(this.blackPiece);
				} else if (column % 2 === 0 && row % 2 === 1) {
					this.grid[row][column] = this.blackPiece;
					this.checkers.push(this.blackPiece);
				}
			}
		}
	}
	selectChecker(row, col) {
		return this.grid[row][col];
	}

	killChecker(position) {
		let checker = this.selectChecker(position[0], position[1]);
		let indexChecker = this.checkers.indexOf(checker);
		this.checkers.splice(indexChecker, 1);

		this.grid[position[0]][position[1]] = null;
	}

	// important numbers
	// 11 -11 9 -9 1 4 jump
	// -22 22 -18 18 2 jump

	// method that creates an 8x8 array, filled with null values
	createGrid() {
		// loop to create the 8 rows
		for (let row = 0; row < 8; row++) {
			this.grid[row] = [];
			// push in 8 columns of nulls
			for (let column = 0; column < 8; column++) {
				this.grid[row].push(null);
			}
		}
	}
	viewGrid() {
		// add our column numbers
		let string = "  0 1 2 3 4 5 6 7\n";
		for (let row = 0; row < 8; row++) {
			// we start with our row number in our array
			const rowOfCheckers = [row];
			// a loop within a loop
			for (let column = 0; column < 8; column++) {
				// if the location is "truthy" (contains a checker piece, in this case)
				if (this.grid[row][column]) {
					// push the symbol of the check in that location into the array
					rowOfCheckers.push(this.grid[row][column]);
				} else {
					// just push in a blank space
					rowOfCheckers.push(" ");
				}
			}
			// join the rowOfCheckers array to a string, separated by a space
			string += rowOfCheckers.join(" ");
			// add a 'new line'
			string += "\n";
		}
		console.log(string);
	}
}
// Your code here

class Game {
	constructor() {
		this.board = new Board();
	}
	start() {
		this.board.createGrid();
		this.board.initializeGrid();
	}
	moveChecker(start, end) {
		const startX = parseInt(start[0]);
		const startY = parseInt(start[1]);
		const endX = parseInt(end[0]);
		const endY = parseInt(end[1]);

		const checker = this.board.selectChecker(start[0], start[1]);

		this.board.grid[endX][endY] = checker;
		this.board.grid[startX][startY] = null;

		if (Math.sqrt((endX - startX) ^ (2 + (endY - startY)) ^ 2) >= 2) {
			this.board.killChecker([(endX + startX) / 2, (endY + startY) / 2]);
		}
	}
}

function getPrompt() {
	game.board.viewGrid();
	rl.question("which piece?: ", whichPiece => {
		rl.question("to where?: ", toWhere => {
			game.moveChecker(whichPiece, toWhere);
			getPrompt();
		});
	});
}

//dont change below
const game = new Game();
game.start();

// Tests
if (typeof describe === "function") {
	describe("Game", () => {
		it("should have a board", () => {
			assert.equal(game.board.constructor.name, "Board");
		});
		it("board should have 24 checkers", () => {
			assert.equal(game.board.checkers.length, 24);
		});
	});

	describe("Game.moveChecker()", () => {
		it("should move a checker", () => {
			assert(!game.board.grid[4][1]);
			game.moveChecker("50", "41");
			assert(game.board.grid[4][1]);
			game.moveChecker("21", "30");
			assert(game.board.grid[3][0]);
			game.moveChecker("52", "43");
			assert(game.board.grid[4][3]);
		});
		it("should be able to jump over and kill another checker", () => {
			game.moveChecker("30", "52");
			assert(game.board.grid[5][2]);
			assert(!game.board.grid[4][1]);
			assert.equal(game.board.checkers.length, 23);
		});
	});
} else {
	getPrompt();
}
