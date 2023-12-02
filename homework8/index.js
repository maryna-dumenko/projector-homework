// First task result
// start, 1 , end, 2


console.log('start'); // Це початок виконання скрипта відповідно виведеться першим

const promise1 = new Promise((resolve, reject) => {
    console.log(1) // після створення обʼєкта promise1 виконується синхронний код
    resolve(2)
})

promise1.then(res => {
    console.log(res) // виконується асинхронний код після виконання синхронного
})

console.log('end'); // закінчення виконання синхроного коду

// Second task result
// 2

Promise.resolve(1)
    .then((x) => x + 1) // приймає 1, повертає значення 2
    .then((x) => { throw new Error('My Error') }) // приймає значення 2, сторюється обєʼкт помилки
    .catch(() => 1) // приймає помилку і повертає значення 1
    .then((x) => x + 1) //приймає значення 1, повертає значення 2
    .then((x) => console.log(x)) // приймає значення 2 і виводить його в консоль
    .catch(console.error) // якби була помилка, то вона вивелась би в консоль

// Third task result
// 2, 4, undefined, 8

const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v); // then приймає 2 і виводить його в консоль
    return v * 2; // повертає значення 4
})
    .then(v => {
        console.log(v); // then приймає 4 із попереднього then і виводить його в консоль
        return v * 2; // повертає значення 8
    })
    .finally(v => {
        console.log(v); // виводить undefined. так як finally не може нічого приймати і повертати
        return v * 2; // відповідно це не спрацює
    })
    .then(v => {
        console.log(v); // then приймає 8 і виводить його в консоль
    });


