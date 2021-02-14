export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Prpíedades
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                oritation: ${this.orientation}
        ]`
    }
}

class Albun {
    id: number;
    title: string;
    pictures: Picture[];
    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = []
    }
    addPicyure(picture: Picture){
        this.pictures.push(picture)
    }
}

const album: Albun = new Albun(1, 'Persomal Pictures');
const picture: Picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);

console.log('Album', album)