function memoryGame(input) {
    let array = input.shift().split(' ');

    let turns = 0;

    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ').map(Number);

        if (array.length == 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        turns++;

        if (input[i] == 'end') {
            console.log(`Sorry you lose :(`);
            console.log(`${array.join(" ")}`)
            break;
        }
        if (element[0] < 0 || element[1] < 0 || element[0] == element[1]
            || element[0] >= array.length
            || element[1] >= array.length) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let middle = Math.trunc(array.length / 2);
            let newElement = `-${turns}a`
            array.splice(middle, 0, newElement, newElement);

        } else if(array[element[0]] != array[element[1]]) {
            console.log(`Try again!`);
            
        }

        if (array[element[0]] == array[element[1]]) {
            console.log(`Congrats! You have found matching elements - ${array[element[0]]}!`);
            let a = array[element[0]];
            array.splice(element[0], 1);
            let index = array.indexOf(a);
            array.splice(index, 1);

        }



    }

}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])