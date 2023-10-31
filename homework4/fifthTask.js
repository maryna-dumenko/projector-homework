function introduceEmployee (name, profession, yearsExperience, yearsExperienceInCompany) {
    console.log(`${name} has been working as a ${profession} for ${yearsExperience} ${yearsExperience > 1? "years" : "year"}, ${yearsExperienceInCompany} of which have been in our company`);
}

function slower(func, seconds) {
    return function(...args) {
        setTimeout(() => {
            func.apply(this, args)
        },seconds*1000);
    }
}

const slowedSomeFunction = slower(introduceEmployee, 2);

slowedSomeFunction("Maryna Dumenko", "markup developer", 6, 4);
