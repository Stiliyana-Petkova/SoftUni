function pass(input) {

    let name = input.shift();

    for (let line of input) {
        let command = line.split(' ');
        
        if(command == 'Sign up') {
            break;

        }else if(command[0] == 'Case') {
            if(command[1] == 'lower') {
                name = name.toLowerCase();
                console.log(name);
            } else {
                name = name.toUpperCase();
                console.log(name);
            }
        } else if(command[0] == 'Reverse') {
            if(command[1] >= 0 && command[1] <= name.length && command[2] >= 0 && command[2] <= name.length) {
            let cut = name.substring(Number(command[1]),Number(command[2])+1);
            
            let reversed = cut.split('').reverse().join('');
            console.log(reversed);
            }
        } else if(command[0] == 'Cut') {
            if(name.includes(command[1])) {
                let first = name.indexOf(command[1]);
                let word = command[1].length;
                let second = Number(first + word);
                
                let one = name.substring(0,first);
                let two = name.substring(second);
                name = one + two;
                console.log(name);
                
                
            } else {
                console.log(`The word ${name} doesn't contain ${command[1]}.`);
            }
        } else if (command[0] == 'Replace') {
             name = name.split(command[1]).join('*');
            console.log(name);
        } else if(command[0] == 'Check') {
            if(name.includes(command[1])) {
                console.log('Valid');
            } else {
                console.log(`Your username must contain ${command[1]}.`);
            }
        }
    
    }
}

pass([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ])