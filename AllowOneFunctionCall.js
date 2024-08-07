function once(fn) {
    let hasBeenCalled = false;
    let result;
  
    return (...args) => {
      if (!hasBeenCalled) {
        result = fn(...args);
        hasBeenCalled = true;
        return result;
      } else {
        return undefined;
      }
    };
  }


//   Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called