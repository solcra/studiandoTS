"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n                title: " + this.title + ",\n                oritation: " + this.orientation + "\n        ]";
    };
    return Picture;
}());
var Albun = /** @class */ (function () {
    function Albun(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Albun.prototype.addPicyure = function (picture) {
        this.pictures.push(picture);
    };
    return Albun;
}());
var album = new Albun(1, 'Persomal Pictures');
var picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);
console.log('Album', album);
