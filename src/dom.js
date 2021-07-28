import { Player } from "./player"

class DOM {
	constructor(obj){
		this.playerGrid = this.createGrid(obj.playerGridDIV)
		this.enemyGridView = this.createGrid(obj.enemyGridDIV)

		this.clickeventToBoard()
	}

	createGrid(gridDIV){
		let grid = gridDIV
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

	clickeventToBoard(){
		let childer = this.enemyGridView.childNodes
		for (let div = 0; div<childer.length; div++){
			childer[div].addEventListener('click', ()=>{
				console.log('clicked')
				this.sendAttack(enemy, childer[div].id)
			})
		}
	}
	
	// hitSelf(coors){
	// 	this.playerGrid.querySelector
	// }
}

export function _DOM(obj){
	return new DOM(obj)
}

export function getDiv(grid, id){
	return grid.querySelector(`#${id}`)
}