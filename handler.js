exports.handler = async (event) => {
    const n = parseInt(event.n);
  
    if (isNaN(n) || n < 0) {
      return {
        statusCode: 400,
        body: 'Invalid input. Please provide a non-negative integer.',
      };
    }
  
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({ factorial }),
    };
  };
  