const removeFromArray = function(array,remove1,remove2) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === remove1 || array[i] === remove2) {
            array.splice(i,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
