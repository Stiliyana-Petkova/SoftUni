function arrayModifier(input) { 

    let array = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(" ");

        if(element[0] == 'swap') {
         let a = Number(array.splice(Number(element[1]),1,Number(array[element[2]])));
         array.splice(Number(element[2]),1,a);
        
        } else if(element[0] == 'multiply') {
            let sum = array[element[1]] * array[element[2]];
            array.splice(element[1],1,sum);
            
        } else if(element[0] == 'decrease') {
            array = array.map(x => x-1)
        } else {
            break;
        }
        
    }
    
    console.log(array.join(", "));

}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])