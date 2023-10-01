// It reverses number

const currentMaxValue = 4589;
let reverseMaxValue = +currentMaxValue.toString().split('').reverse().join("");

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
