class Gameboard{
	constructor(n){
		this.grid = []

		this.createGrid(n)
	}

	createGrid(n){
		for (let i = 0; i < n; i++){
			this.grid[i] = []
			for (let j = 0; j < n; j++){
				this.grid[i][j] = 0
			}
		}

		return this.grid
	}

}

export function _gameboard(obj){
	return new Gameboard(obj)
}
