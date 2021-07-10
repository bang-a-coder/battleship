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