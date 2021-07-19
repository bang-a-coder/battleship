import _ from "lodash"
import { _gameboard } from "./gameboard"
import { revertCors } from "./helpers"

class Player {
	constructor(obj){
		this.name = obj.name
		this.score = 0
		this.sampleShipOptions = ['carrier', 'battleship', 'cruiser', 'sub', 'destroyer']	//TODO remove when proper ship placement is applied
		this.enemyBoard = []
		this.successfulHits = []
		this.enemyBoardDom = obj.enemyBoardDom
		this.selfBoardDom = obj.selfBoardDom
		this.yAxisOption = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
		this.gameboard = _gameboard(10, this.selfBoardDom)
		console.log(this.enemyBoardDom)
	}

	getEnemyMap(enemy){
		this.enemyBoard = enemy.gameboard.getLimitedGrid()

		return this.enemyBoard		// TODO object property is not updated 
	}

	positionVessels(name, orientation, pin){
		this.gameboard.placeShip(name, orientation, pin) //TODO if you call the property it is not saved, idk wtf is going one, refactor later
			
		return this.gameboard.grid
	}

	sendAttack(enemy, coordinates){
		if (enemy.gameboard.receiveAttack(coordinates)) { 
			this.score++ 
			this.successfulHits.push(coordinates)
			this.enemyBoardDom.querySelector(`#${coordinates}`).classList.add('red')
		}
		
		return this.getEnemyMap(enemy)
	}

	randomAttack(enemy){
		let attackCoors = _.sample(this.yAxisOption) + _.random(0,10)
		if (this.successfulHits.indexOf(attackCoors) !== -1) {
			this.randomAttack(enemy)
			return
		}
		return this.sendAttack(enemy, attackCoors)
	}

	visualiseMyBoard(){
		this.gameboard.visualiseBoard()
	}

	sampleInit(ver){			//Temporary shit
		if (ver === 'A'){
			this.positionVessels("carrier", "x", "A0");
			this.positionVessels("battleship", "y", "C0");
			this.positionVessels("cruiser", "x", "B5");
			this.positionVessels("sub", "x", "A6");
			this.positionVessels("destroyer", "x", "J5");

			this.visualiseMyBoard()
		}

		if (ver === 'B') {
			this.positionVessels("carrier", "x", "A0");
			this.positionVessels("battleship", "y", "C0");
			this.positionVessels("cruiser", "x", "J5");
			this.positionVessels("sub", "x", "B6");
			this.positionVessels("destroyer", "x", "H0");	

			this.visualiseMyBoard()
		}
	}

	eventToEnemyBoard(enemy){
		let childer = this.enemyBoardDom.childNodes
		for (let div = 0; div<childer.length; div++){
			childer[div].addEventListener('click', ()=>{
				console.log('clicked')
				this.sendAttack(enemy, childer[div].id)
			})
		}
	}
}

export function _player(name){
	return new Player(name)
}