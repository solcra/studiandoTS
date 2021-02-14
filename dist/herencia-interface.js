"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Meetus'
};
var picture = {
    id: 2,
    title: 'Familia',
    orientation: PhotoOrientation.Landscape
};
var newPicture = {};
console.log(album);
console.log(picture);
newPicture.id = 2;
newPicture.title = 'Moon';
console.log(newPicture);
