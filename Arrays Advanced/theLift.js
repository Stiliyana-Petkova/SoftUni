function theLift(input) {
    let people = Number(input.shift());
    let allPeople = people;
    let array = input.shift().split(" ").map(Number);
    let numberWagons = array.length;
    let newArray = [];
    let totalSpace = 0;

    for(let i = 0; i < array.length; i++) {
        let wagon = array[i];

        for(let j = 1; j <= 4; j++) {
           if(people <= 0) {
                break;
            }  
            wagon ++;
            people--;

            if(wagon == 4) {
                break;
            }
        }
       
        newArray.push(wagon);   
    }
    
    totalSpace = numberWagons * 4;
    if(totalSpace < allPeople) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        
    } 
     
    
    if(totalSpace > allPeople && people == 0) { 
        console.log(`The lift has empty spots!`);
        
    }
    console.log(newArray.join(" "));

    
}

theLift([
    "0",
    "0 0"
   ])