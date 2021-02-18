export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}
// super clase
abstract class Item {
    protected readonly _id: number;
    protected _title: string;
    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }
    get id(){
        return this._id;
    }
    // set id(id: number){
    //     this._id = id;
    // }
    get title(){
        return this._title;
    } 
    set title(title: string){
        this._title = title;
    }
}

class Picture extends Item{
    // Prpíedades
    public static photoOrientation = PhotoOrientation;
    _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation){
        super(id, title)
        this._orientation = orientation;
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

class Albun  extends Item{
    pictures: Picture[];
    constructor(id: number, title: string){
        super(id, title)
        this.pictures = []
    }
    addPicyure(picture: Picture){
        this.pictures.push(picture)
    }
}
const album: Albun = new Albun(1, 'Persomal Pictures');
const picture: Picture = new Picture(1, 'Plazi sessiom', PhotoOrientation.Square);
album.addPicyure(picture);

console.log('Picture.id', picture.id);

//const item = new Item(1, 'titulo de prueba');
//console.log(item);

// Provar el miembro estatico
console.log('OhotoOrientation', Picture.photoOrientation.Landscape);