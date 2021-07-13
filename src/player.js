import { _gameboard } from "./gameboard"

class Player {
	constructor(){
		this.gameboard = _gameboard(10)
		this.score = 0
		this.shipOptions = ['carrier', 'battleship', 'cruiser', 'sub', 'destroyer']
		this.enemyBoard
	}

	// positionVessels(orientation, pin){
	// 	this.gameboard.placeShip(this.shipOptions[0], orientation, pin)

	// 	return this.gameboard.grid
	// }

	sendAttack(enemy, coordinates){
		enemy.gameboard.receiveAttack(coordinates)
	}

	getEnemyMap(enemy){
		let enemyBoordCopy = enemy.gameboard
		enemyBoordCopy.grid.forEach((el)=>{
			el.forEach((cor)=>{
				if (cor === 1) {cor = 0}
			})
		})

		//TODO refactor, send changes instead of iterating through arrays every time, lazy ass

		return enemyBoordCopy.grid
	}
}

export function _player(){
	return new Player()
}