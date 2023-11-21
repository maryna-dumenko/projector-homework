class Animal {
    constructor(name, dateOfBirthday, favoriteFood) {
        this.name = name;
        this.dateOfBirthday = dateOfBirthday;
        this.favoriteFood = favoriteFood;
    }

    introduce() {
        return `This is ${ this.name }`
    }

    dateBirthday() {
       return `It is ${ this.dateOfBirthday }`
    }

    eat() {
        return `${ this.name } likes to eat ${ this.favoriteFood }`
    }
}

// Two classes have to have common parent class
class WildAnimal extends Animal {
    constructor(name, dateOfBirthday, favoriteFood, livingEnvironment) {
        super(name, dateOfBirthday, favoriteFood)
        this.livingEnvironment = livingEnvironment;
    }

    getLivingEnvironment() {
        return this.livingEnvironment;
    }
}

class Elephant extends WildAnimal {
    #averageWeight = 0;

    constructor(name, dateOfBirthday, favoriteFood, livingEnvironment, isBaby, weight) {
        super(name, dateOfBirthday, favoriteFood, livingEnvironment);
        this.isBaby = isBaby;
        this.weight = weight;
    }

    #getAverageWeight() {
        this.#averageWeight = this.isBaby ? 110 : 4000;
        return this.#averageWeight;
    }

    description() {
        return `This is elephant ${ this.name } and it has ${ this.weight } kg`
    }

    isOverweight() {
       return this.weight > this.#getAverageWeight();
    }
}

class Bear extends WildAnimal {
    #averageWinterHibernationDays = 150;

    constructor(name, dateOfBirthday, favoriteFood, livingEnvironment, babiesCount, type) {
        super(name, dateOfBirthday, favoriteFood, livingEnvironment);
        this.babiesCount = babiesCount;
        this.type = type;
    }

    averageWinterHibernationDays() {
        return `Bears sleep on average for ${ this.#averageWinterHibernationDays } days in winter`;
    }

    description() {
        return `This is bear ${ this.name } and it refers to ${ this.type } bears`;
    }

    hasBabies() {
        return `${ this.name } ${this.babiesCount ? ` has babies` : `don't have babies`}`
    }
}

class Parrot extends Animal {
    #averageLifeYears;

    constructor(name, dateOfBirthday, favoriteFood, gender, color) {
        super(name, dateOfBirthday, favoriteFood);
        this.gender = gender;
        this.color = color;
        this.#averageLifeYears = 13;
    }

    isLongLived() {
        const age = new Date().getFullYear() - new Date(this.dateOfBirthday).getFullYear();
        return `This parrot ${ this.#averageLifeYears > age ? `isn't` : `is` } long-lived`;
    }

    description() {
        return `This is parrot ${ this.name } and it has ${ this.color } color`;
    }

    getGender() {
        return `${ this.name } is ${ this.gender }`
    }
}

class Dog extends Animal {
    #notes;
    constructor(name, dateOfBirthday, favoriteFood, breed, color, notes) {
        super(name, dateOfBirthday, favoriteFood);
        this.breed = breed;
        this.color = color;
        this.#notes = notes;
    }

    getDetails() {
        return `This dog has certain characteristics: ${ this.#notes.join(", ") }`;
    }

    description() {
        return `This is dog ${ this.name } and it refers to ${ this.breed }`;
    }

    getGender() {
        return `${ this.name } is ${ this.gender }`
    }
}

const zara = new Elephant('Zara', 'December 17, 1995 03:24:00', 'fruits', 'zoo', true, 150);
console.log(zara.description());
console.log(zara.isOverweight());
console.log(zara.getLivingEnvironment());
console.log(zara.eat());
console.log(zara.dateBirthday());

console.log("-----------------");

const sara = new Bear('Sara', 'September 23, 2010 07:55:00', 'nuts', 'forest', 10, 'dddd');
console.log(sara.description());
console.log(sara.hasBabies());
console.log(sara.getLivingEnvironment());
console.log(sara.averageWinterHibernationDays())
console.log(sara.eat());
console.log(sara.introduce());

console.log("-----------------");

const carol = new Parrot('Carol', 'October 15, 2005 12:46:00', 'sunflower seeds', 'female',  'black');
console.log(carol.description());
console.log(carol.getGender());
console.log(carol.isLongLived());
console.log(carol.eat());
console.log(carol.introduce());

console.log("-----------------");

const foxy = new Dog('Foxy', 'October 15, 2005 12:46:00', 'rabbit', 'Fox Terrier',  'white', ["has allergy", "don't like lamb"]);
console.log(foxy.description());
console.log(foxy.getDetails());
console.log(foxy.getGender());
console.log(foxy.eat());
console.log(foxy.introduce())
