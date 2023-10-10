// It returns sum of all odd numbers by using cycle
function iterativeOddSumTo(number) {
    let result = 0;
    for(let i= 1; i <= number; i++) {
        if(i % 2 !== 0) {
            result+=i;
        }
    }
    return result;

}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25
