// Type: object

let user: object;
user = {};
user = {
    id: 1,
    username: 'solcra',
    firstName: 'Pablo',
    isPro: true
}

console.log('user', user)

const myObj = {
    id: 1,
    username: 'solcra',
    firstName: 'Pablo',
    isPro: true
}

const insInstance = myObj instanceof Object;  // clase Object JavaScript
console.log('insInstance', insInstance);
console.log('myObj',myObj.username)
console.log(user)