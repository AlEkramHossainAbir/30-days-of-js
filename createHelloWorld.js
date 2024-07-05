function createHelloWorld() {
    const greeting = "Hello World";
    
    return function() {
      return greeting;
    };
  }

  /**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 * f({},null,42);  //"Hello World"
 */

