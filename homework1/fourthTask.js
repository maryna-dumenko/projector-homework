// It returns result of multiplication of numbers of array

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((prev, current) => prev * current);

console.log(productOfArray); // 24
