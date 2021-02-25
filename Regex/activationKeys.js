function activation(input) {
    let rawKey = input.shift();

    for (let line of input) {
        
        let command = line.split('>>>');
        if(command[0] == 'Generate') {
            break;
        } else if (command[0] == 'Contains') {
            if(rawKey.includes(command[1])) {
                console.log(`${rawKey} contains ${command[1]}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command[0] == 'Flip') {
            let firstindex = command[2];
            let secondIndex = command[3];
            if(command[1] == 'Upper') {
                let cutWord = rawKey.substring(firstindex,secondIndex);
                let newWord = cutWord.toUpperCase();
                rawKey = rawKey.replace(cutWord, newWord);
                console.log(rawKey);
                
            } else if(command[1] == 'Lower') {
                let cutWord = rawKey.substring(firstindex,secondIndex);
                let newWord = cutWord.toLowerCase();
                rawKey = rawKey.replace(cutWord, newWord);
                console.log(rawKey);
            }

        } else if (command[0] == 'Slice') {
            let first = Number(command[1]);
            let second = Number(command[2]);
            let one = rawKey.substring(0,first);
            let two = rawKey.substring(second);
            rawKey = one + two;
            console.log(rawKey);

        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}

activation([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ])