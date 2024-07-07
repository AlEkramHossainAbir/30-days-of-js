function greaterThan10(n) { return n > 10; }
function firstIndex(n, i) { return i === 0; }
function plusOne(n) { return n + 1 }

var filter = function(arr, fn) {
     const newArray = arr.filter((val,i) => fn(val,i));
     return newArray;
};
const arr = [-2,-1,0,1,2]
const newArray = filter(arr, plusOne);
console.log(newArray)