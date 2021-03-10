function factorial(x, y) {
    let firstSum = 1;
    let secondSum = 1;
    let result = 0;

    for(let i = 1; i <= x; i++) {
        firstSum *= i;
        
    }
    for(let j = 1; j <= y; j++) {
        secondSum *= j;
    }

    result = firstSum / secondSum;
    console.log(result.toFixed(2)) 


}

factorial(5, 2)