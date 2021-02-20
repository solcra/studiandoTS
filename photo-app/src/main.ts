//import {User, Album, Picture,PhotoOrientation} from './photo-app';

import { Album } from "./albun";
import { PhotoOrientation } from "./photo-orientations";
import { Picture } from "./picture";
import { User } from "./user";


const user = new User(1, 'Solcra', 'Carlos', true);
const albun = new Album(10,'Primeras fotod');
const picture = new Picture(1,'Titulo del la pintura','2021',PhotoOrientation.Panorama )

user.addAlbum(albun)
albun.addPictur(picture)

console.log('user', user)
user.removeAlbum(albun);
console.log('user', user)