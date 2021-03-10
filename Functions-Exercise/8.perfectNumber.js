function perfect(n) {
    let sum = 0;
    let number = parseInt(n / 2);
    for (let i = 0; i < number; i++) {
        let index = i + 1;
        if (n % index == 0) {
            sum += index;
        }


    }
    if (n == sum) {
        console.log('We have a perfect number!')
    } else {
        console.log(`It's not so perfect.`)
    }
}


perfect(28);