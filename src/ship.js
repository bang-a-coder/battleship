class Ship {
	constructor(obj){
		this.name = obj.name
		this.hull = []
		this.sunk = obj.sunk

		for (let i=0; i<obj.len; i++) { this.hull.push(0) }	
	}

	hit(n){
		if (n > this.hull.length) return this.hull

		this.hull[n] = 1
		return this.hull
	}


}


export function _ship(obj) {
	return new Ship(obj)
}