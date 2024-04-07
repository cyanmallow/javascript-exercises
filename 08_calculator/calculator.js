

const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  let sumArray = 0;
  for (let i=0; i<array.length; i++){
     sumArray+=array[i];
  }
    return sumArray;
};

const multiply = function(newArray) {
  var mulArray = 1;
  for (let i=0; i<newArray.length; i++){
     mulArray*=newArray[i];
  }
  return mulArray;
};

const power = function(a, b) {
  const module = function(a,b){
    if (b==0) {
      return 1;
    }
    else {
      var n = 1;
      for (let i=1; i<=b; i++){
        n*=a;
      }
      return n;
    }
  }
	return module(a,b);
};

const factorial = function(a) {
  const factorial = function(n) {
    if (n==0 || n==1){
      return 1;
    }
    else {
      return n*factorial(n-1);
    }
  }
	return factorial(a);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
