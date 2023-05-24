exports.handler = async (event) => {
    const n = event.n;
    const factorial = calculateFactorial(n);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ factorial })
    };
  };
  
  function calculateFactorial(n) {
    let factorial = 1;
    
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    
    return factorial;
  }
  