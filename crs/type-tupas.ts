export {}

// [1, 'user']
let user: [number, string];
user = [1, 'solcra'];

console.log('User:', user);
console.log('Username:', user[1]);
console.log('Username.length:', user[1].length);
console.log('id:', user[0]);

// Tuplas con varis valores
// id, usename, isPro
let userInfo: [number, string, boolean];
userInfo = [2,'Solcra',true];
console.log('UserInfo', userInfo);


// Areglo de tuplas
let array: [number, string][] = [];
array.push([1,'solcra']);
array.push([2,'solcra 2']);
array.push([3,'lensQueen']);
console.log('array', array);
console.log('array', array[0][1]);

// Uso de funciones Array
// LensQueen-> lensQueen001

console.log('array', array[2][1].concat('001'));
array[2][1] = array[2][1].concat('001');
console.log('array', array)