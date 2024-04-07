const fibonacci = function(nonStringMaybe) {
    const fibo = [1, 1];
    let n = parseInt(nonStringMaybe);

    if (isNaN(n)){
        return 'OOPS';
    }

    if (n == 0){
        return 0;
    } else if (n<3 && n>0){
        return fibo[n-1];
    } else if (n>3) {
        for (let i=2; i<n; i++){
            fibo.push(fibo[i-1]+fibo[i-2]);
        }
        return fibo[n-1];
    }
    else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
