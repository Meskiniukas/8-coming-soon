import { suma } from './components/sum.js';
import { multiply as daugyba } from './components/multiply.js';

import { matematika } from './components/matematika.js';

const rez1lt = matematika.sudeti(8, 5);
const rez2lt = matematika.atimti(8, 5);
const rez3lt = matematika.sudauginti(8, 5);
const rez4lt = matematika.dalinti(8, 5);

const rez1en = matematika.sum(8, 5);
const rez2en = matematika.subtract(8, 5);
const rez3en = matematika.multiply(8, 5);
const rez4en = matematika.divide(8, 5);

const rez1rus = matematika.rus1(8, 5);
const rez2rus = matematika.rus2(8, 5);
const rez3rus = matematika.rus3(8, 5);
const rez4rus = matematika.rus4(8, 5);

console.log(rez1lt);
console.log(rez2lt);
console.log(rez3lt);
console.log(rez4lt);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);

console.log(rez1rus);
console.log(rez2rus);
console.log(rez3rus);
console.log(rez4rus);