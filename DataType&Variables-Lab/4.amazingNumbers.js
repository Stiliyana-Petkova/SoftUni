function amazingNumber(num) {

    let numAsString = num.toString();
    let sum = 0;

    for(let i=0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let sumAsString = sum.toString();
    if(sumAsString.includes('9')) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }
    

}

amazingNumber(1233);