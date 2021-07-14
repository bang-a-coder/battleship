import _ from "lodash"
import { _gameboard } from "./gameboard"

class Player {
	constructor(name){
		this.gameboard = _gameboard(10)
		this.name = name
		this.score = 0
		// this.shipOptions = ['carrier', 'battleship', 'cruiser', 'sub', 'destroyer']
		this.enemyBoard = []
		this.successfulHits = []
	}

	getEnemyMap(enemy){
		this.enemyBoard = enemy.gameboard.getLimitedGrid()

		return this.enemyBoard
	}

	positionVessels(name, orientation, pin){
		this.gameboard.placeShip(name, orientation, pin) //TODO if you call the property it is not saved, idk wtf is going one, refactor later
			
		return this.gameboard.grid
	}

	sendAttack(enemy, coordinates){
		if (enemy.gameboard.receiveAttack(coordinates)) { 
			this.score++ 
			this.successfulHits.push(coordinates)
		}
		
		return this.getEnemyMap(enemy)
	}

	randomAttack(enemy){
		const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
		let attackCoors = _.sample(yAxis) + _.random(0,10)
		if (this.successfulHits.indexOf(attackCoors) !== -1) {
			this.randomAttack(enemy)
			return
		}
		return this.sendAttack(enemy, attackCoors)

	}
}

export function _player(name){
	return new Player(name)
}