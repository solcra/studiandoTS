"use strict";
// Orientacion ára fotografias
//const landcape = 0;
var portrait = 1;
var squer = 2;
var panomara = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landcape"] = 0] = "Landcape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landcape2 = PhotoOrientation.Landcape;
console.log('Landcpe: ', landcape2);
console.log('Landscape', PhotoOrientation[landcape2]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landcape"] = 11] = "Landcape";
    PictureOrientation[PictureOrientation["Portrait"] = 12] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 13] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 14] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log(PictureOrientation.Portrait);
var Contry;
(function (Contry) {
    Contry["Bolivia"] = "bol";
    Contry["Colombia"] = "col";
    Contry["Mexico"] = "mex";
    Contry["EEUU"] = "usa";
    Contry["Espana"] = "esp";
})(Contry || (Contry = {}));
var contry = Contry.Colombia;
var pais = 'bol';
console.log('contry', contry);
// console.log(Contry["bol"])
