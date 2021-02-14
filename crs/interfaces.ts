// FUncion para mostrar una fotogradia
export {}
enum PhotoOorientation {
    Landscape,
    Portrait,
    Squere,
    Panorama
}
interface Picture {
    title: string;
    date: string;
    orientation: PhotoOorientation;
}
function showPincture(picture: Picture){
    console.log(`[title: ${picture.title}, date ${picture.date}, orienta: ${picture.orientation}]`)

}

let myPic = {
    title: 'Test Title',
    date: '2021-02',
    orientation: PhotoOorientation.Landscape
}

showPincture(myPic);
showPincture({
    title:'Testo',
    date: '2021-09',
    orientation: PhotoOorientation.Panorama
})

interface Pictureonfig {
    title?: string;
    date?: string;
    orientation?: PhotoOorientation
}
function generatePicture(config: Pictureonfig){
    const pic = {
        title: 'Default',
        date: '2021-03'
    };
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date
    }
    return pic;
}

let picture = generatePicture({});
console.log(picture);
picture = generatePicture({title: 'Carlos'});
console.log(picture);

// Interfaz: Userio
interface User{
    readonly id: number;
    username: string;
    isPro: boolean;
}
let user: User;
user = {id: 10, username: 'solcra', isPro: true}
console.log('user', user);
user.username = 'palzi';
// user.id = 30;
console.log('user', user)