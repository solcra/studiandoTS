export{}
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album  extends Entity{
    // id: number;
    // title: string;
}

interface Picture extends Entity {
    // id: number;
    // title: string;
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetus'
}

const picture: Picture = {
    id: 2,
    title: 'Familia',
    orientation: PhotoOrientation.Landscape
}
let newPicture = {} as Picture;
console.log(album)
console.log(picture)

newPicture.id = 2;
newPicture.title = 'Moon';
console.log(newPicture);