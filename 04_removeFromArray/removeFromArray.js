var removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val));
}


// This one almost worked but wasn't able to pass "removes multiple values" test

// const removeFromArray = function(array, ...remove) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < remove.length; j++) {
//             if (array[i] === remove[j]) {
//                 array.splice(i,1);
//             }
//         }      
//     }
//     return array;
// };

// Do not edit below this line
module.exports = removeFromArray;
