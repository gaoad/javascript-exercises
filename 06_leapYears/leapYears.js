const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";
    if (year % 4 == 0) {
        if (year % 100 !== 0) {
            return true;
        }
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

//their solution is so much more elegant

// Do not edit below this line
module.exports = leapYears;
