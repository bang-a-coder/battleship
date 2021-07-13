import _ from "lodash"
import { _gameboard } from "./gameboard"

class Player {
	constructor(name){
		this.gameboard = _gameboard(10)
		this.name = name
		this.score = 0
		// this.shipOptions = ['carrier', 'battleship', 'cruiser', 'sub', 'destroyer']
		this.enemyBoard = []
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
		if (enemy.gameboard.receiveAttack(coordinates)) { this.score++ }
		
		return this.getEnemyMap(enemy)
	}

}

export function _player(name){
	return new Player(name)
}