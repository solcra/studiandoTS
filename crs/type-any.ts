// tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser)

// Tipo inferido
let otherID;
otherID = 1;
otherID = "1";
console.log('otherId', otherID);

let surprise: any = 'Hola typescript';
//
const res = surprise.substring(6);
console.log('res', res)