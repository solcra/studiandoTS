// void
// Tipo explicito

function showInfo(user:any):any{
    console.log('User info', user.id, user.username, user.firtName);
}

showInfo({id: 1, username:'Solcra', firtName:'Carlos'})

// Tipo inferido
function showFormattedInfo(user: any){
    console.log('Usr info',`
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firtName}
    `);
}

showFormattedInfo({id: 1, username:'Solcra', firtName:'Carlos'})

// Tipo void, como tipo de dato en variable
let ususable: void;
//ususable = null;
ususable = undefined;

// tipo: never

function heandError(code: number, message: string): never{
    // process you code here
    // Generate a message
    throw new Error(`${message}. code: ${code}`)

}
try {
    heandError(404, 'Not Found');
    
} catch (error) {
    
}

function sumNumbers(limit:number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sume;
}

sumNumbers(10);
// ciclo infinito, el progrma nunca termine