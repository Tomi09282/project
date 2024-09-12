function getFirstElement (arr){
    arr.array.forEach(element => {
       console.log(element); 
    });
    }
    function factorial (n) {
      if (n == 0 || n == 1)
        return 1;
      if (f[n] > 0)
        return f[n];
      return f[n] = factorial(n-1) * n;
    }
    const numbers = [1, 2, 3];
    const words = [apple, banana, cherry];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);