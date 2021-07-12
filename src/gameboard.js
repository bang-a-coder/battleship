class Gameboard{
	constructor(n){
		this.grid = []

		this.createGrid(n)
		// 0 -> empty slot
		// 1 -> boat there
		// 2 -> hit miss
		// 3 -> hit boat
	}

	createGrid(n){
		for (let i = 0; i < n; i++){
			this.grid[i] = []
			for (let j = 0; j < n; j++){ this.grid[i][j] = 0 }
		}

		return this.grid
	}

	placeShip(ship, orient, pin) {
		let len = ship
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

