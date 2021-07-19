import { getShipLen } from "./helpers"

class Ship {
	constructor(obj){
		this.name = obj.name
		this.hull = []
		this.sunk = obj.sunk

		for (let i=0; i<getShipLen(obj.name); i++) { this.hull.push(0) }	
	}

	hit(n){
		if (n > this.hull.length) return this.hull

		this.hull[n] = 1
		this.isSunk()
		return this.hull
	}

	isSunk(){
		if (this.hull.every(el => el === 1)) this.sunk = true

		return this.sunk
	}
}


export function _ship(obj) {
	return new Ship(obj)
}