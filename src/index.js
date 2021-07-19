import { createGrid } from "./dom";
import { _player } from "./player";
import "./styles.scss";

console.log('workingggggggggggggg?')

let playerASide = document.querySelector('#playerA-view')
let playerBSide = document.querySelector('#playerB-view')

console.log(playerASide.querySelector('#enemy-grid'))

let pAEnemyGrid = createGrid(playerASide.querySelector('#enemy-grid'))
let pASelfGrid = createGrid(playerASide.querySelector('#player-grid'))

let pBEnemyGrid =  createGrid(playerBSide.querySelector('#enemy-grid'))
let pBSelfGrid = createGrid(playerBSide.querySelector('#player-grid'))



const playerA = _player({
	name: 'Aa',
	enemyBoardDom: pAEnemyGrid,
	selfBoardDom: pASelfGrid
})

const playerB = _player({
	name: 'Bb',
	enemyBoardDom: pBEnemyGrid,
	selfBoardDom: pBSelfGrid
})

playerA.sampleInit('A')
playerB.sampleInit('B')

playerA.visualiseMyBoard()

console.log(playerA)
console.log(playerB)