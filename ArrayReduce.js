function sum(accum, curr) { return accum + curr * curr; }

var reduce = function(nums, fn, init) {
  let val = init;
  nums.forEach(num => {
    val = fn(val, num);
  });
  return val;
};
const nums = [1,2,3,4]
const newArray = reduce(nums, sum,100);
console.log(newArray)