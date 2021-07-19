export function decipherCors(str){
	let abRef = 'ABCDEFGHIJ'
	let brokenStr = str.split('')

	return [abRef.indexOf(brokenStr[0]), parseInt(brokenStr[1])]
}

export function revertCors(arr){
	let abRef = 'ABCDEFGHIJ'
	
	return `${abRef[arr[0]]}${arr[1]}`
}
