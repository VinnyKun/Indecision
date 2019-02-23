var nameVar = 'Andrew';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'hal'
    return petName;

}

//block scoping

const fullName = 'vin kunnath';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName)
}

console.log(firstName);