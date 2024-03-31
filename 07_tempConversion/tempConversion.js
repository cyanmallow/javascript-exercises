const convertToCelsius = function(doF) {
  return Math.round((doF - 32)*5/9);
};

const convertToFahrenheit = function(doC) {
  return Math.round((doC*9/5+32));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
