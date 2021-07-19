export function createGrid(gridID, enemy, player){
	let grid = gridID
	const yAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
	for (let letter of yAxis){
		for (let i=0; i<10; i++){
			let position = document.createElement('div')
			position.classList.add('position')
			position.id = `${letter + i}`
			// if (enemy) position.addEventListener('click',()=>{
			// 	player.
			// })
			grid.appendChild(position)
		}
	}

	return grid
}

export function getDiv(grid, id){
	return grid.querySelector(`#${id}`)
}