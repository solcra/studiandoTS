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
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(Picture.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (o) {
            this._orientation = o;
        },
        enumerable: false,
        configurable: true
    });
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n                title: " + this.title + ",\n                oritation: " + this.orientation + "\n        ]";
    };
    return Picture;
}());
var Albun = /** @class */ (function () {
    function Albun(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    Object.defineProperty(Albun.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Albun.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Albun.prototype.addPicyure = function (picture) {
        this.pictures.push(picture);
    };
    return Albun;
}());
var album = new Albun(1, 'Persomal Pictures');
var picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);
console.log('Picture.id', picture.id);
