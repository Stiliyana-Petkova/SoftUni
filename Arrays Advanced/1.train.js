function train(arr) {

    let wagons = arr.shift().split(' ');
    let capacity = arr.shift();

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes("Add")) {
            
           let element = arr[i].split(' ');
           wagons.push(element[1]);
           
        } else {
            wagons.map(Number);
            for(let j = 0; j < wagons.length; j++) {
                let sum = Number(arr[i]) + Number(wagons[j]);
                if(sum <= Number(capacity)) {
                    wagons.splice(j,1,sum);
                    break;

                }
            }
        }
    }
    console.log(wagons.join(' '))
    
    

}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])