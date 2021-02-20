"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'Solcra', 'Carlos', true);
var albun = new photo_app_1.Album(10, 'Primeras fotod');
var picture = new photo_app_1.Picture(1, 'Titulo del la pintura', '2021', photo_app_1.PhotoOrientation.Panorama);
user.addAlbum(albun);
albun.addPictur(picture);
console.log('user', user);
