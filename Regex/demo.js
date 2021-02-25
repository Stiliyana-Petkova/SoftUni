function solve(input){
    let text = input.shift();
   

    for(let line of input){
        let command = line.split(' ');
        if(command == 'Done'){
            break;
        }else if(command[0] == 'Change'){
            text = text.split(command[1]).join(command[2])
            console.log(text);
        }else if(command[0] == 'Includes'){
            if(text.includes(command[1])){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(command[0] == 'End'){
            if(text.endsWith(command[1])){
                console.log('True');
            }else{
                console.log('False');
            }
        }else if(command[0] == 'Uppercase'){
            text = text.toUpperCase();
            console.log(text);
        }else if(command[0] == 'FindIndex'){
            console.log(text.indexOf(command[1]));
            
        }else if(command[0] == 'Cut'){
           let first = text.substring(command[1])
           let second = first.substring(0,command[2])
            console.log(second);
        }

    }

}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
  ]
  )