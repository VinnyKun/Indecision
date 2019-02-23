// const add = function (a, b) {
//     console.log(arguments)
//     return a + b;
// }

// arrow version

const add = (a,b) => {
    
    // arguments dont work in es6
    //console.log(arguments)
    return a + b;
}

//console.log(add(1, 1, 7));

const user = {
    name: 'Vinny',
    cities: ['Singapore', 'Hawaii'],
    printPlacesLived() {   
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplier: 7,
    multiply() {
        return this.numbers.map((number) => number * this.multiplier);
    }

};
console.log(multiplier.multiply());
