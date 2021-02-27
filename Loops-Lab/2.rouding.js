function rounding(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if(num2 > 15) {
        console.log(parseFloat(num1.toFixed(15)))
    }else {

    console.log(parseFloat(num1.toFixed(num2)));
}
}

rounding(3.1415926535897932384626433832795,17)