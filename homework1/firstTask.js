// It returns array of initials

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];

for(let i = 0; i < userNames.length; i++) {
    initials.push(userNames[i].split(" ").map(name => (name[0].toUpperCase())).join("."));
}

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
