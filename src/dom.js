export function createGrid(gridID){
	let grid = gridID

	for (let i=0; i<100; i++){
		let position = document.createElement('div')
		position.classList.add('position')
		grid.appendChild(position)
	}
}