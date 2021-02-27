function triangle(n) {
     n = Number(n);
     

    for(let i = 1; i <= n; i++) {
        let line = "" ;

        for(let j = 1; j<= i; j++){
            line += i + " " ;
        }
        console.log(line)
    }
    
}

triangle(3)