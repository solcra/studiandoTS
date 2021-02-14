"use strict";
// Crear una fotografia
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('Create picture using', title, date, size);
}
createPicture('My birthday', '2020-03-10', '100x100');
//parametros opcionale en funciones
function createPicture2(title, date, size) {
    // Se crea la fotografia
    console.log('Create picture using', title, date, size);
}
createPicture2('My birthday', '500x500');
// fLAT  array function
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2021-02-05', '100x100');
console.log('picture', picture);
// Tipo de retorno con typescript
function handlrError(code, message) {
    if (message === 'error') {
        throw new Error(message + ", Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handlrError(200, 'ok');
    console.log(result);
    result = handlrError(200, 'error');
    console.log(result);
}
catch (error) {
}
