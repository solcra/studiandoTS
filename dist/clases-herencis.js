"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// super clase
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        // set id(id: number){
        //     this._id = id;
        // }
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
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
    // Prpíedades
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(Item));
var Albun = /** @class */ (function (_super) {
    __extends(Albun, _super);
    function Albun(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.pictures = [];
        return _this;
    }
    Albun.prototype.addPicyure = function (picture) {
        this.pictures.push(picture);
    };
    return Albun;
}(Item));
var album = new Albun(1, 'Persomal Pictures');
var picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);
console.log('Picture.id', picture.id);
//const item = new Item(1, 'titulo de prueba');
//console.log(item);
// Provar el miembro estatico
console.log('OhotoOrientation', Picture.photoOrientation.Landscape);
