"use strict";
// void
// Tipo explicito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firtName);
}
showInfo({ id: 1, username: 'Solcra', firtName: 'Carlos' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('Usr info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firtName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'Solcra', firtName: 'Carlos' });
// Tipo void, como tipo de dato en variable
var ususable;
//ususable = null;
ususable = undefined;
// tipo: never
function heandError(code, message) {
    // process you code here
    // Generate a message
    throw new Error(message + ". code: " + code);
}
try {
    heandError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sume;
}
sumNumbers(10);
// ciclo infinito, el progrma nunca termine
