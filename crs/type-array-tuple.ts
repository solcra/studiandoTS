// Cortechetes []

// tipo explicito
let users: string[];
users = ['luixsviles','solcra', 'lensqueen'];
// user = [1, false, 'carlos']  // esto es un erro ya que elarreglo es para solo estring

// Tipo inferido
let otherUsers = ['true','solcra2','1'];
// otherUsers = [1, true, 'test'] // Erro ya que por ser inferio quedaron string el arreglo

// arrat<tipo>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite sunset', 'vacatiom time', 'landscape'];

console.log('first user', users[0]);
console.log('pictureTitles', pictureTitles[1]);

// propiedades en array
console.log(users.length);

// Uso de funciones en arreys
users.push('Carlos');
console.log('users', users)
users.sort();  // se organiza de forma alfavetica
console.log('users', users)