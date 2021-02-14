console.log("Hola mundo");

// numericos
// Explicito
let phone: number;
phone = 1;
phone = 3218519880;

// phone = "Hola"; // Error

// Inferido
let phoneNumber = 3218519880;

phoneNumber = 123;
// phoneNumber = "Error"; // Error por tipo
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error por tipo

// Tipado Inferido
let isUserPro = true;
isUserPro = false;
// isUserPro = 23; // Error

let username: string = 'Carlos';
// username = true; // Error

//Tempate String
// Uso de back-tick `

let userInfo: string;
userInfo = `
    User info:
    username: ${username}
    fritmarname: ${username + ' Granada'}
    phone: ${phone}
    isPro: ${isPro}
`;

console.log('userInfo', userInfo)