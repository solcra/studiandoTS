// Crear una fotografia

// function creatPicture(title, date, size){
//     // TItle
// }

// Usamos TS, definimos tipos par parametros
type SquareSise = '100x100' | '500x500' | '1000x1000';
function createPicture(title: string, date: string, size: SquareSise){
    // Se crea la fotografia
    console.log('Create picture using', title, date, size)
}

createPicture('My birthday','2020-03-10', '100x100')

//parametros opcionale en funciones
function createPicture2(title?: string, date?: string, size?: SquareSise){
    // Se crea la fotografia
    console.log('Create picture using', title, date, size)
}
createPicture2('My birthday','500x500')

// fLAT  array function
let createPic = (title: string, date: string, size: SquareSise): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size};
};
const picture = createPic('Platzi session', '2021-02-05', '100x100');
console.log('picture', picture);


// Tipo de retorno con typescript

function handlrError(code: number, message: string): never | string {
    if(message === 'error'){
        throw new Error(`${message}, Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}
try {
    let result = handlrError(200, 'ok')
    console.log(result);
    result = handlrError(200, 'error')
    console.log(result);
} catch ( error){

}