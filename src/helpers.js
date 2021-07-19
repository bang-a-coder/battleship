export function decipherCors(str){
	let abRef = 'ABCDEFGHIJ'
	let brokenStr = str.split('')

	return [abRef.indexOf(brokenStr[0]), parseInt(brokenStr[1])]
}

export function revertCors(arr){
	let abRef = 'ABCDEFGHIJ'
	
	return `${abRef[arr[0]]}${arr[1]}`
}

export function getShipLen(name){
	const fleet = {
		'carrier': 5,
		'battleship': 4,
		'cruiser': 3,
		'sub': 3,
		'destroyer': 2,
		'jetski': 1
	}

	return fleet[name]
}