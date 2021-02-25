function solve(input) {
 
    let n = Number(input[0]);
     
    for(let i = 1; i <= n; i++) {
     
        let line = input[i];
     
        let regex = /([*@])([A-Z][a-z]{2,})\1:\s(\[[A-Za-z]\]\|)(\[[A-Za-z]\]\|)(\[[A-Za-z]\]\|)$/g;
     
        let isValid = regex.test(line);
     
     
        if(isValid) {      
     
            let match = line.match(regex)[0];
     
     
            let tag = match.substring(1, match.lastIndexOf(match.charAt(0)));
            let first = match.substring(match.length - 11, match.length - 10);
            let second = match.substring(match.length - 7, match.length - 6);
            let third = match.substring(match.length - 3, match.length - 2);
     
            let encrypted = [];
     
           encrypted[0] = first.charCodeAt(0);
           encrypted[1] = second.charCodeAt(0);
           encrypted[2] = third.charCodeAt(0);
     
            console.log(tag + ': ' + encrypted.join(' '));
     
     
        } else {
            console.log('Valid message not found!');
        } 
     
    }
     
    }
     
    solve([
        '3',
        '*Request*: [I]|[s]|[i]|',
        '*Taggy@: [73]|[73]|[73]|',
        'Should be valid @Taggy@: [v]|[a]|[l]|'
      ]);