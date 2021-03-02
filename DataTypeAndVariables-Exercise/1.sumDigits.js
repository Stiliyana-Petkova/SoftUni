function sumDigits(n) {

    let sum = 0;
    let numAsString = n.toString()
    
    for(let i=0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
        }
    console.log(sum)

}

sumDigits(245678)