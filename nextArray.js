const test = ()=>{
    const count = 0;
    return function(){
        return count++;
    };
}

const next = test();
console.log(next());
console.log(next());
console.log(next());