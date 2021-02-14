// Orientacion ára fotografias
//const landcape = 0;
const portrait = 1;
const squer = 2;
const panomara =3;

enum PhotoOrientation {
    Landcape,
    Portrait,
    Square,
    Panorama
}

const landcape2: PhotoOrientation = PhotoOrientation.Landcape;

console.log('Landcpe: ', landcape2);
console.log('Landscape', PhotoOrientation[landcape2])

enum PictureOrientation {
    Landcape = 11,
    Portrait,
    Square,
    Panorama
}

console.log(PictureOrientation.Portrait)

enum Contry {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const contry: Contry = Contry.Colombia;
const pais = 'bol';
console.log('contry', contry);
// console.log(Contry["bol"])