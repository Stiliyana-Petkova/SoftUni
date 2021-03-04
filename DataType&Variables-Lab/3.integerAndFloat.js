function integerAndFloat(firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;
    let integerSum = Math.trunc(sum);

    if(integerSum == sum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`)
    }


}

integerAndFloat(9, 100, 1);