// IMPORT
// hero
// main
// footer

// FUNKCIJU PANAUDOJIMAS
// hero
// main
// footer

// ******** ******** ******** ********


// import būtinai failo pradžioje (!)

// import { suma } from './components/sum.js'; // jeigu eksportuojama be žodžio default; tačiau turi pavadinimas būti tas pats
// import { minus as minusiukas } from './components/minus.js';
// import cepelinai from './components/multiply.js'; // rekomenduotina visgi tą patį vardą naudoti, kaip ir kt. faile
// import divide from './components/divide.js';

import { sum, divide } from './components/matematika.js'

// import { matematika } from './components/matematika.js'

// const rez1 = suma(8, 6);
// const rez2 = minusiukas(8, 6);
// const rez3 = cepelinai(8, 6);
// const rez4 = divide(8, 6);

// console.log(rez1, rez2, rez3, rez4);

const rez5 = sum(8, 6);
// const rez6 = minus(8, 6);
// const rez7 = multiply(8, 6);
const rez8 = divide(8, 6);

console.log(rez5, rez8);

// const rez9 = matematika.sudeti(8, 6);

// console.log(rez9);