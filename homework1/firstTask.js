// It returns array of initials

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(user => user.split(" ").map(name => (name[0].toUpperCase())).join("."));

initials.sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]
