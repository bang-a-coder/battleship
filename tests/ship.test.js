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

let ship = _ship({
	name: 'cruiser',
	len: 3,
	sunk: false
})

test('hit 2', ()=>{
	expect(ship.hit(2)).toEqual([0,0,1])
})

test('hit 1', ()=>{
	expect(ship.hit(1)).toEqual([0,1,1])
})

test('hit 0', ()=>{
	expect(ship.hit(0)).toEqual([1,1,1])
})

test('hit 4', ()=>{
	expect(ship.hit(4)).toEqual([1,1,1])
})



