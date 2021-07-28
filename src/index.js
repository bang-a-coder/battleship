import { createGrid } from "./dom";
import { _player } from "./player";
import "./styles.scss";

console.log('workingggggggggggggg?')

let playerASide = document.querySelector('#playerA-view')
let playerBSide = document.querySelector('#playerB-view')

const playerA = _player({
	name: 'Aa',
	playerGridDIV: playerASide.querySelector('#player-grid'),
	enemyGridDIV: playerASide.querySelector('#enemy-grid')
})

const playerB = _player({
	name: 'Bb',
	playerGridDIV: playerBSide.querySelector('#player-grid'),
	enemyGridDIV: playerBSide.querySelector('#enemy-grid')
})

playerA.sampleInit('A')
playerB.sampleInit('B')

playerA.visualiseMyBoard()
playerB.visualiseMyBoard()

// playerA.eventToEnemyBoard(playerB)
// playerB.eventToEnemyBoard(playerA)
// playerA.sendAttack(playerB, 'A2')	



console.log(playerA)
console.log(playerB)