function oddEvenSum(n) {

    let arr = String(n);
    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        if(num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
          
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}` 
}

console.log(oddEvenSum(1000435))