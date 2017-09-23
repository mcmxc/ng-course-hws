import BMW from './classes/BMW';
import Audi from './classes/Audi';
import Color from './classes/Color';

import { Car } from './types';

const x6: Car = new BMW(2009, 2.4, 164, new Color('#ff00000'), false, 220);
const q7: Car = new Audi(2003, 4.2, 266, new Color('RGB(255, 120, 49'), true, 312);

x6.move('left', 200); // car engine has been started; car is moving to the left with a speed of 200 km/h; car engine has been stopped
q7.move('top', 400); // // car engine has been started; car is moving to the left with a speed of 312 km/h; car engine has been stopped

console.log(x6.color); // RGB(255, 0, 0)
x6.color = '#00ff00';
console.log(x6.color); // RGB(0, 255, 0)

q7.speed = 1000;
console.log(q7.speed); // 312
