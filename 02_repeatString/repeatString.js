const repeatString = function(inputString, howManyTimes) {
    let result= '';
    if (howManyTimes < 0){
        return 'ERROR'
    } else {
        for (let i=0; i<howManyTimes; i++){
            result +=  inputString;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
