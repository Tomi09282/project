function getFirstElement (arr){
    if (!arr.length == 0) {
        console.log(arr[0]);
    } else{
        console.log("empty");
    }
    }
    const numbers = [1, 2, 3];
    const words = [apple, banana, cherry];
    console.log(`First number: ${getFirstElement(numbers)}`);
    console.log(`First word: ${getFirstElement(words)}`);