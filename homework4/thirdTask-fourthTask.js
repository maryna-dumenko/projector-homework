let me = {
    name: "Maryna",
    surname: "Dumenko",
    city: "Kyiv",
    gender: "female",
    age: 28,
    profession: "markup developer",
    hobbies: [
        "gym",
        "hiking"
    ],
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.city}. I work as ${this.profession}`);
    },
    describeHobbies() {
        console.log(`My hobbies ${this.hobbies.length > 1? "are" : "is"} ${this.hobbies.join(',')}`);
    }
}

me.introduce();
me.describeHobbies();

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfDescribeHobbies = me.describeHobbies.bind(me);

// task fourth
setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfDescribeHobbies, 2000);
