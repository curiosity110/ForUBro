class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isAlive = true;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    greet() {
        console.log(`Hello this is ${this.fullName()}`);
    }
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

class Writer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    pseudonym() {
        return `${this.firstName.reverse()} ${this.lastName.reverse()}`;
    }
    signBook() {
        console.log(`To my friend, from ${this.pseudonym()}`);
    }
}


class Developer extends Person {
    constructor(firstName, lastName, codename) {
        super(firstName, lastName);
        this.codename = codename;
    }
    impress() {
        for (let i = 0; i < 5; i++) {
            let str = '';
            for (let j = 0; j < 10; j++) {
                Math.random() > 0.5 ? str += '0' : str += '1';
            }
            console.log(str);
        }
        console.log(`By: ${this.codename}`);
    }
}

class Singer extends Person {
    constructor(firstName, secondName, melody) {
        super(firstName, secondName);
        this.melody = melody;
    }
    artisticName() {
        return `Fancy ${this.firstName} ${this.lastName}`;
    }
    sing() {
        for (var i = 0; i < 3; i++) {
            console.log(this.melody);
        }
    }
}

class JuniorDeveloper extends Developer {
    constructor(firstName, lastName, codename) {
        super(firstName, lastName, codename);
        this.isStruggling = true;
    }
    complain() {
        console.log(this.fullName().toUpperCase());
    }
    workHard() {
        for (var i = 0; i < 10; i++) {
            console.log(`${this.codename} is working very hard`);
        }
    }
}

// const ian = new Developer('Ian', 'Stump', 'Ping Pong King');
// ian.impress();

// const sam = new Singer('Sam', 'Brannen', 'Jaaaavaaaaa');
// sam.greet();
// sam.sing();

// const laurent = new Person('Laurent', 'Meyer');
// laurent.greet();

// const fante = new Writer('John', 'Fante');
// fante.greet();
// fante.signBook();

// const daniele = new JuniorDeveloper('Daniele', 'Roncaglioni', 'Music Hacker');
// daniele.complain();
// daniele.workHard();
