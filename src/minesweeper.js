
//--------------------third improvement--------------------------
/*class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}

	playMove(rowIndex, columnIndex) {
		this._board.flipTile(rowIndex, columnIndex);
			if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
				console.log('Game Over!');
				this._board.print();
			} else if (this._board.hasSafeTiles() === false){
				console.log('Congradulations! You won!');
			} else {
				console.log('Current Board: ');
				this._board.print();
			}

	}
}

class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfBombs = numberOfBombs;
		this._numebrOfTiles = numberOfRows*numberOfColumns;
	  this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
	  this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);

	}

	get playerBoard() {
		return this._playerBoard;
	}

	get bombBoard() {
		return this._bombBoard;
	}

	flipTile(rowIndex, columnIndex) {
		if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
			console.log('This tile has already been flipped.');
			return;
		} else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
			this._playerBoard[rowIndex][columnIndex] = 'B';
		} else {
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
		}
		this._numberOfTiles--;
	}

	getNumberOfNeighborBombs(rowIndex, columnIndex) {
		const neighborOffsets = [
			[-1, -1],[-1, 0],[-1, 1],
			[ 0, -1],        [ 0, 1],
			[ 1, -1],[ 1, 0],[ 1, 1]
		];
		const numberOfRows = this._bombBoard.length;
		const numberOfColumns = this._bombBoard[0].length;
		let numberOfBombs = 0;

		neighborOffsets.forEach(offset => {
			const neighborRowIndex = rowIndex + offset[0];
			const neighborColumnIndex = columnIndex + offset[1];
			if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
				if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
					this._numberOfBombs++;
				}
			}
		});
		return this._numberOfBombs;
	}

	hasSafeTiles() {
		return this._numberOfTiles !== this._numberOfBombs;

	}

	print() {
		console.log(this.playerBoard.map(row => row.join(' | ')).join('\n'));
	}

  static generatePlayerBoard (numberOfRows, numberOfColumns) {
		let board = [];
		for (let Ri=0; Ri < numberOfRows; Ri++) {
				let row = [];
				for (let Ci=0; Ci < numberOfColumns; Ci++) {
					row.push(' ');
				}
			board.push(row);
		}
		return board
	}

	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
		let board = [];
		for (let Ri=0; Ri< numberOfRows; Ri++) {
				let row = [];
				for (let Ci=0; Ci< numberOfColumns; Ci++) {
					row.push(null);                    //replace ' ' with null
				}
			board.push(row);
		}
		let numberOfBombPlaced = 0;
		while (numberOfBombPlaced < numberOfBombs) {
			let randomRowIndex = Math.floor(Math.random()*numberOfRows);
			let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
				if (board[randomRowIndex][randomColumnIndex] !== 'B') {	//control flow
						board[randomRowIndex][randomColumnIndex] = 'B';
						numberOfBombPlaced++; }
		}
		return board;
	}
}


const g = new Game(3,3,3);
g.playMove(0,0);*/








//-----------In the beginning--------------------
/*const printBoard = board => {
	console.log('Current Board:');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
}
const board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);*/

/*------------Second improvement---------------------------------------------
// Create a player board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];                                                  //Create an empty board
	for (let Ri=0; Ri<numberOfRows; Ri++) {                          //column setting
			let row = [];                                             //The row within each column
			for (let Ci=0; Ci<numberOfColumns; Ci++) {                   //row setting
				row.push(' ');                    //within the row, each loop adds ' ' to the column
			}
		board.push(row);                                           //Add column to row
	}
	return board
}
console.log(generatePlayerBoard(10,10));

//--------------------Create Bomb Board-----------------------------
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	//Copy player board
	let board = [];
	for (let Ri=0; Ri<numberOfRows; Ri++) {
			let row = [];
			for (let Ci=0; Ci<numberOfColumns; Ci++) {
				row.push(null);                    //replace ' ' with null
			}
		board.push(row);
	}
	//Create bombs to place randomly
	let numberOfBombPlaced = 0;   //Start with 0 then add till max allowed
	while (numberOfBombPlaced < numberOfBombs) {
		let randomRowIndex = Math.floor(Math.random()*numberOfRows);
		let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
			if (board[randomRowIndex][randomColumnIndex] !== 'B') {	//control flow
					board[randomRowIndex][randomColumnIndex] = 'B';
					numberOfBombPlaced++; }
	}
	return board
}

//--------------create interactive
getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	const neighborOffsets = [
		[-1, -1],[-1, 0],[-1, 1],
		[ 0, -1],        [ 0, 1],
		[ 1, -1],[ 1, 0],[ 1, 1]
	];
	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let numberOfBombs = 0;
	neighborOffsets.forEach(offset => {
		const neighborRowIndex = rowIndex + offset[0];
		const neighborColumnIndex = columnIndex + offset[1];
		if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
			if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
				numberOfBombs++
			}
		}

	})
	return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if (playerBoard[rowIndex][columnIndex] !== ' ') {
		console.log('This tile has already been flipped.');
		return;
	} else if (bombBoard[rowIndex][columnIndex] == 'B') {
		console.log('Oops! You have been bombed!');
		return;
	} else {
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
	}
}



const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
}

//------------------Test the board-----------------------
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard (3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated player board');
printBoard(playerBoard);
*/
