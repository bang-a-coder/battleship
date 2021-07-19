// test('what is reality anyway?', () => {
// 	expect(ship(1, 2)).toBe(3);
//       });

import { revertCors } from "../src/gameboard"

test('revert cors', ()=>{
	expect(revertCors([1,0])).toEqual('B0')
})