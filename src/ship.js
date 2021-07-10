class Ship {
	constructor(obj){
		this.name = obj.name
		this.hull = []
		this.sunk = obj.sunk

		for (let i=0; i<obj.len; i++) { this.hull.push(0) }	

	}


}


export function _ship(obj) {
	return new Ship(obj)
}