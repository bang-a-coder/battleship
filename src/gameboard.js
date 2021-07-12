import { _ship } from "./ship"

class Gameboard{
	constructor(n){
		this.grid = []

		this.createGrid(n)
		// 0 -> empty slot
		// 1 -> boat there
		// 2 -> hit miss
		// 3 -> hit boat

		this.fleetFormation = {}
	}

	createGrid(n){
		for (let i = 0; i < n; i++){
			this.grid[i] = []
			for (let j = 0; j < n; j++){ this.grid[i][j] = 0 }
		}

		return this.grid
	}

	placeShip(name, orient, pin) {
		let newShip = _ship({
			name: name,
			sunk: false
		})

		let len = newShip.hull.length
		let cors = decipherCors(pin)

		if(orient === 'x'){
			for (let i =0; i<len; i++){
				this.grid[cors[0]][cors[1]+i] = 1
			}
		}

		if(orient === 'y'){
			for (let i =0; i<len; i++){
				this.grid[cors[0]+i][cors[1]] = 1
			}
		}

		//TODO Edge case support, litteraly edgecase when you place a ship beyond the board
		//or ship on top of ship


		return this.grid
	}

	receiveAttack(cors){
		let attackCors = decipherCors(cors)
		let location = this.grid[attackCors[0]][attackCors[1]]

		if (location === 0 ) {
			this.grid[attackCors[0]][attackCors[1]] = 2

			return this.grid
		}

		if (location === 1) {
			this.grid[attackCors[0]][attackCors[1]] = 3

			return this.grid
		}

		return this.grid
	}
}

export function _gameboard(obj){
	return new Gameboard(obj)
}






export function decipherCors(str){
	let abRef = 'ABCDEFGHIJ'
	let brokenStr = str.split('')

	return [abRef.indexOf(brokenStr[0]), parseInt(brokenStr[1])]
}

