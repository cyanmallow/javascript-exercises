const leapYears = function(whichYearToYear) {
    if ((whichYearToYear%4==0 && whichYearToYear%100!=0) || (whichYearToYear%100==0 && whichYearToYear%400==0)){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
