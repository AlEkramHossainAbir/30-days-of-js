var chunk = function(arr, size) {
    let ans = [] ;
  while(arr.length > 0){
    ans.push(arr.splice(0,size));

  }
  return ans;
};

console.log(chunk([5,6,7,8,9],2))