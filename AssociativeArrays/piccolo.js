function solve(input) {
    let obj = {};

    for (let line of input) {
        let [direction, carNumber] = line.split(', ');
        
        if(direction == 'IN') {
            obj[carNumber] = direction;
        } else {
            delete obj[carNumber]
        }
    }
    //if(!obj.hasOwnProperty(carNumber)) {
      //  console.log("Parking Lot is Empty");
    //} else {
        let keys = Object.keys(obj).sort((a,b) => a.localeCompare(b))
        console.log(keys.join('\n'));
    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])