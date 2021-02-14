// Explicita 
let nullVariable: null;
nullVariable = null;
//nullVariable = 1;

let otherVarable = null;
otherVarable = 'test'

console.log('nullVariable',nullVariable)
console.log('otherVariable', otherVarable)

// undefine
let undefinedVarible: undefined = undefined;
//undefinedVarible = 'test';

let otherUndefimed = undefined;
console.log('undefidVariable', undefinedVarible);
console.log('otherUndefimed', otherUndefimed)

// Null y undefined: como subtipos

// --strictNullChecks
let albumName: string;
//albumName = null;
//albumName = undefined;