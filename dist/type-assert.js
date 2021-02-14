"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle bracket syntax
var username;
username = 'Solra';
// tenemos una cadema, TS confia en mi!
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too shoret';
console.log('message', message);
var usernameWittId = 'solcra 1';
// ccomo obtener el username?
username = usernameWittId.substring(0, 6);
console.log('Username only', username);
// Sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too shoret';
console.log('message2', message);
var helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log(username);
