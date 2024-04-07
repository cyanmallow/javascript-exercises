const palindromes = function (originalWords) {
    const cleanWords = originalWords.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const revWords = cleanWords.split('').reverse().join('');
    return cleanWords == revWords;
};

// Do not edit below this line
module.exports = palindromes;
