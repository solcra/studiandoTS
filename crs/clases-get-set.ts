export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Prpíedades
    _id: number;
    _title: string;
    _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    } 
    set title(title: string){
        this._title = title;
    }
    get orientation(){
        return this._orientation
    }
    set orientation(o: PhotoOrientation){
        this._orientation = o;

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
    _id: number;
    _title: string;
    pictures: Picture[];
    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
        this.pictures = []
    }
    get id () {
        return this._id;
    }
    set id (id: number){
        this._id = id
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title
    }
    addPicyure(picture: Picture){
        this.pictures.push(picture)
    }
}
const album: Albun = new Albun(1, 'Persomal Pictures');
const picture: Picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);

console.log('Picture.id', picture.id);