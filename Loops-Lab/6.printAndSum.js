function printAndSum(n1, n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    let sum = 0;
    let line = "";
    

    for(let i = n1; i <= n2; i++) {
        line += i + " ";
        sum += i;
        
        
    }
    console.log(line)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)