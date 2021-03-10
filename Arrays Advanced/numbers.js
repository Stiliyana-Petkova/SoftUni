function numbers(str) {
    let array = str.split(' ').map(Number);
    let elements = array.length;
    let sum = 0;
    for (let i of array) {
        sum += i
    }
    sum /= elements;
    
    let greatestNumbers = array.filter(x => x > sum);
    greatestNumbers.sort((a,b) => b-a);
    
    if(greatestNumbers.length > 5) {
        greatestNumbers.length = 5;
    }

    if(greatestNumbers.length == 0) {
        console.log('No')
    } else {
        console.log(greatestNumbers.join(' '))
    }

}

numbers('1');