const createCounter = (init) =>{
    let val = init
    return {
        increment : function(){
           return ++val
        },
        reset: function(){
            val = init
           return val
        },
          decrement: function(){
          return --val
        },
    }
    
}

const counter = createCounter(5);

counter.increment();
counter.increment();