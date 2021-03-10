function magicCards(input) {

    let array = input.shift().split(":");
    let newArray = [];
    
    for (let i = 0; i < input.length; i++) {
        let element = input[i].split(' ');
        let command = element[0];
        
        if(command == 'Add') {
            
            if(array.includes(element[1])) {
                newArray.push(element[1]);
            } else {
                console.log(`Card not found.`);
            }
            
        } else if(command == 'Insert') {
            if(array.includes(element[1])) {
                newArray.splice(Number(element[2]),0,element[1]);
            } else if(element.length-1 > 2) {
                console.log(`Error!`);
            } else  {
                console.log(`Error!`);
            } 
        } else if(command == 'Remove') {
            if(newArray.includes(element[1])) {
                let index = newArray.indexOf(element[1]);
                newArray.splice(index,1);
                
            } else {
                console.log(`Card not found.`);
            }
        } else if(command == 'Swap') {
           
           let index1 = newArray.indexOf(element[1]);
           let index2 = newArray.indexOf(element[2]);
           let temp = newArray[index1];
           newArray[index1] = newArray[index2];
           newArray[index2] = temp;
           
        } else if(command == 'Shuffle') {
            newArray.reverse();
        } else if (command == 'Ready') {
            console.log(newArray.join(' '));

        }
        
    }
    
}

magicCards(["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
"Add Pop",
"Add Exodia",
"Add Aso",
"Remove Wrath",
"Add SineokBqlDrakon",
"Shuffle deck",
"Insert Pesho 0 d",
"Ready"])