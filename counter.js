function createCounter(n) {
    let counter = n;
    
    return function() {
        return counter++;
    };
}

const counter = createCounter(10)
counter()
counter()
counter()
/*
one line solutions
const createCounter = n => () => n++;

*/