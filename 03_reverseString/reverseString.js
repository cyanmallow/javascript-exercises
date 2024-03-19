const reverseString = function(normalString) {
    const lettersArray = normalString.split(' ');

    const reversedArray = lettersArray.map(word => {
        return word.split('').reverse().join('');
    })
    return reversedArray.reverse().join(' ');
};

// Do not edit below this line
module.exports = reverseString;
