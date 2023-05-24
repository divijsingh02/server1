exports.handler = async (event) => {
    const n = event.n;
    const factorial = calculateFactorial(n);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ factorial })
    };
  };
  
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }