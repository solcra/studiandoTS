"use strict";
console.log("Hola mundo");
// numericos
// Explicito
var phone;
phone = 1;
phone = 3218519880;
// phone = "Hola"; // Error
// Inferido
var phoneNumber = 3218519880;
phoneNumber = 123;
// phoneNumber = "Error"; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
// Tipado explicito
var isPro;
isPro = true;
// isPro = 1; // Error por tipo
// Tipado Inferido
var isUserPro = true;
isUserPro = false;
// isUserPro = 23; // Error
var username = 'Carlos';
// username = true; // Error
//Tempate String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User info:\n    username: " + username + "\n    fritmarname: " + (username + ' Granada') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
