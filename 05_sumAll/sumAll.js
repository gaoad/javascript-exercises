const sumAll = function(num1, num2) {
    let sum = 0;
    //Could not figure out how to filter for arrays; copied int solution
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        return sum;
    } else if (num2 < num1) {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
