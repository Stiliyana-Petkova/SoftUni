function solve(input) {
 
    let n = Number(input[0]);
     
    for(let i = 1; i <= n; i++) {
     
        let line = input[i];
     
        let regex = /!([A-Z][a-z]{3,})!:\[([A-Za-z]{3,})\]/g;
     
        let isValid = regex.test(line);
     
        if(isValid) {
     
            let match = line.match(regex);
            for (let line of match) {
                var el = line.split(regex);
                el.shift();
                el.pop();
               }

            
            let encrypted = [];
            
     
            for(let j = 0; j < el[1].length; j++) {
                let num = el[1].charCodeAt(j);
                encrypted.push(num);
            }
     
            console.log(el[0] + ': ' + encrypted.join(' '));
     
     
        } else {
            console.log('The message is invalid');
        } 
     
    }
     
    }
    solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ])