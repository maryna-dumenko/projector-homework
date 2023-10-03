const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let vowelsArray = ['А', 'Е', 'Є', 'И', 'І', 'Ї', 'О', 'У', 'Ю', 'Я'];

// Sort array using conditional
let filteredNames = [];

for(let i = 0; i < userNames.length; i++) {
    if(vowelsArray.indexOf(userNames[i][0].toUpperCase()) !== -1) {
        filteredNames.push(userNames[i]);
    }
}

// Sort array using method sort
let filteredNamesSecondMethod = userNames.filter(function (name) {
    return vowelsArray.includes(name[0])
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
console.log(filteredNamesSecondMethod); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
