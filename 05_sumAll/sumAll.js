const sumAll = function(x, y) {
    let sum =0;
    if (Number.isInteger(x)==true && Number.isInteger(y)==true && x>=0 && y>=0 && x<y){
        for (let i=x; i<=y; i++){
            sum +=i;
        }
        return sum;
    }
    else if (Number.isInteger(x)==true && Number.isInteger(y)==true && x>=0 && y>=0 && x>y){
        for (let i=y; i<=x; i++){
            sum +=i;
        }
        return sum;
    }
    else {
        return 'ERROR';
    }


};

// Do not edit below this line
module.exports = sumAll;
