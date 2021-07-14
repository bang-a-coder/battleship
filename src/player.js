import _ from "lodash"
import { _gameboard } from "./gameboard"

class Player {
	constructor(obj){
		this.gameboard = _gameboard(10)
		this.name = obj.name
		this.score = 0
		this.sampleShipOptions = ['carrier', 'battleship', 'cruiser', 'sub', 'destroyer']	//TODO remove when proper ship placement is applied
		this.enemyBoard = []
		this.successfulHits = []
		this.enemyBoardDom = obj.enemyBoardDom
		this.selfBoardDom = obj.selfBoardDom
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

	sampleInit(ver){
		if (ver === 'A'){
			this.positionVessels("carrier", "x", "A0");
			this.positionVessels("battleship", "y", "B0");
			this.positionVessels("cruiser", "x", "B5");
			this.positionVessels("sub", "x", "A6");
			this.positionVessels("destroyer", "x", "J5");
		}

		if (ver === 'B') {
			this.positionVessels("carrier", "x", "B0");
			this.positionVessels("battleship", "y", "C0");
			this.positionVessels("cruiser", "x", "J5");
			this.positionVessels("sub", "x", "B6");
			this.positionVessels("destroyer", "x", "H0");	
		}
	}
}

export function _player(name){
	return new Player(name)
}