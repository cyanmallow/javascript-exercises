const removeFromArray = function(originalArray, removeWhichNumber) {
    const index = originalArray.indexOf(removeWhichNumber);
    if (index !== -1){
        originalArray.splice(index, 1);
    }
    return originalArray;
};


// Do not edit below this line
module.exports = removeFromArray;
