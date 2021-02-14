export {};
// 10, '10'

let idUser: number | string;
idUser = 10
idUser = '10'

// Buscar username dado un ID
function getUsernameByID(id: number | string) {
    return 'Solcra'
}
console.log(getUsernameByID(20))

// Alias de tipo: TS
type IdUser = number | string;
type UserName = string;
let idUser2: IdUser;
idUser = 10
idUser = '10'

// Buscar username dado un ID
function getUsernameByID2(id: IdUser): UserName {
    return 'Solcra'
}
console.log(getUsernameByID2(20))

// Tipos literales
// 100*100, 500*500, 1000*1000

type SquereSize = '100x100' | '500x500' | '1000x1000';

//let smallPicture: SquereSize = '200x200'; // esto es un error
let smallPicture: SquereSize = '100x100';
let medimPicture: SquereSize = '500x500';