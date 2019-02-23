
//constructor to take in age and default is 0
//getDescription method takes in to account age - name is age year(s) old.

class Person {
    //constructor
    //syntax for default parameters
    constructor(name = 'Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        //back tick for template string interpolation;
        return `Hi I am ${this.name}!`;
    }

    getDescription(){
        //back tick for template string interpolation;
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //flip it twice to give actual boolean value
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }
        return description
    }
}

//traveler extends person class
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        //flip it twice to get actual boolean location
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()){
            greeting = greeting + ` from ${this.homeLocation}` ;
        } else {
            greeting = greeting + ` from god knows` ;
        }

        return greeting;
    }
}

const me = new Traveler('Vineeth Kunnath', 27, 'Singapore');
console.log(me.getGreeting());

const me1 = new Traveler(undefined,undefined, 'god knows');
console.log(me1.getGreeting());