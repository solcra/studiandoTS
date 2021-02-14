"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOorientation;
(function (PhotoOorientation) {
    PhotoOorientation[PhotoOorientation["Landscape"] = 0] = "Landscape";
    PhotoOorientation[PhotoOorientation["Portrait"] = 1] = "Portrait";
    PhotoOorientation[PhotoOorientation["Squere"] = 2] = "Squere";
    PhotoOorientation[PhotoOorientation["Panorama"] = 3] = "Panorama";
})(PhotoOorientation || (PhotoOorientation = {}));
function showPincture(picture) {
    console.log("[title: " + picture.title + ", date " + picture.date + ", orienta: " + picture.orientation + "]");
}
var myPic = {
    title: 'Test Title',
    date: '2021-02',
    orientation: PhotoOorientation.Landscape
};
showPincture(myPic);
showPincture({
    title: 'Testo',
    date: '2021-09',
    orientation: PhotoOorientation.Panorama
});
function generatePicture(config) {
    var pic = {
        title: 'Default',
        date: '2021-03'
    };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log(picture);
picture = generatePicture({ title: 'Carlos' });
console.log(picture);
var user;
user = { id: 10, username: 'solcra', isPro: true };
console.log('user', user);
user.username = 'palzi';
// user.id = 30;
console.log('user', user);
