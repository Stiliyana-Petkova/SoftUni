function commands(input) {
   let array = input.shift();
   
   
   for(let i = 0; i < input.length; i++) {
       let current = input[i].split(' ');
       let command = current[0];
       let x = current[2];
       let y = current[4];
       let z = current[1];

       
       if(command == "reverse") {
        
        let reversed = array.splice(x, y).reverse();
        array.splice(x,0,reversed); 
        

        
       } else if(command == 'sort') {
           
           let sorted = array.splice(x, y).sort((a,b) => a-b);
           array.splice(x,0,sorted);
           //console.log(array.toString().split(','));
       } else if(command == 'remove') {
          
           array.splice(0,z);
         
       } else {
        console.log(array.toString().split(',').join(', '))
       }
   }

}

commands([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
"reverse from 20 count 4",
"end"])