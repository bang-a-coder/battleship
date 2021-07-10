import { _ship } from "../src/ship";


test('init ship', () => {
	expect(_ship({
		name: 'cruiser',
		len: 3,
		sunk: false
	})).toMatchObject({
		name: 'cruiser',
		hull: [0,0,0],
		sunk: false
	})
})

let ship1 = _ship({
	name: 'cruiser',
	len: 3,
	sunk: false
})

test('identify', ()=>{
	expect(ship1).toMatchObject({
		name: 'cruiser',
		hull: [0,0,0],
		sunk: false
	})
})

test('ship1 hit 2', ()=>{
	expect(ship1.hit(2)).toEqual([0,0,1])
})

test('ship1 hit 1', ()=>{
	expect(ship1.hit(1)).toEqual([0,1,1])
})

test('ship1 hit 0', ()=>{	
	expect(ship1.hit(0)).toEqual([1,1,1])
})

test('ship1 hit 4', ()=>{
	expect(ship1.hit(4)).toEqual([1,1,1])
})

test('ship1 sunk?', ()=>{
	expect(ship1.isSunk()).toEqual(true)
})

test('identify after battle', ()=>{
	expect(ship1).toMatchObject({
		name: 'cruiser',
		hull: [1,1,1],
		sunk: true
	})
})



let destoyer = _ship({
	name: 'destroyer',
	len: 2,
	sunk: false
})

destoyer.hit(1)
destoyer.hit(0)

test('destroyer after battle', ()=>{
	expect(destoyer).toMatchObject({
		name: 'destroyer',
		hull: [1,1],
		sunk: true
	})
})