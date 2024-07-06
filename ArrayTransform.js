const plusone = (n) =>{
    return n+1
}
const plusI = (n, i) =>{
    return n + i;
}
const constant = ()=>{
    return 42
}
var map = function(arr, fn) {
    const newArray = arr.map((val,i) => fn(val,i));
    return newArray;
};
const arr = [1,2,3];
const newArray = map(arr, plusone);