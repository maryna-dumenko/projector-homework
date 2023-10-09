const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

// It returns object with keys in lower register and rounded values
function optimizer(data) {
    let result = {};

    for (let key in data) {
        result[key.toLowerCase()] = Number(data[key]).toFixed(2);
    }

    return result;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
