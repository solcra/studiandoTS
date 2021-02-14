export{}

// <tipo> // Angle bracket syntax
let username: any;
username = 'Solra';

// tenemos una cadema, TS confia en mi!

let message: string = (<string>username).length > 5 ?
    `Welcome ${username}`:
    'Username is too shoret';

console.log('message', message);

let usernameWittId: any = 'solcra 1';
// ccomo obtener el username?
username = (<string>usernameWittId).substring(0,6);
console.log('Username only', username)

// Sintaxis "as"
message = (username as string).length > 5 ?
    `Welcome ${username}`:
    'Username is too shoret';

console.log('message2', message);

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log(username);