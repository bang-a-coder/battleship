import { createGrid } from "./dom";
import "./styles.scss";

console.log('workingggggggggggggg?')

let playerASide = document.querySelector('#playerA-view')
let playerBSide = document.querySelector('#playerB-view')

console.log(playerASide.querySelector('#enemy-grid'))

createGrid(playerASide.querySelector('#enemy-grid'))
createGrid(playerASide.querySelector('#player-grid'))

createGrid(playerBSide.querySelector('#enemy-grid'))
createGrid(playerBSide.querySelector('#player-grid'))