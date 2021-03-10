function angryPet(input, index, typeItem, typePrice) {
   
    let leftArray = input.splice(0,index);
    let entryPoint = input[0];
    let rightArray = input.splice(1);
    let sum = 0;
    let sum2 = 0;
 for (let i = 0; i < leftArray.length; i++) {
     let element = leftArray[i];
     if(typePrice == 'positive') {
         if(element >= 0) {
             sum += element;
         } 
    } else if (typePrice == 'negative') {
        if(element < 0) {
            sum += element;
        }
    } else if(typePrice == 'all'){
        sum += element;
    }
    
 }
 for (let i = 0; i < rightArray.length; i++) {
    let element = rightArray[i];
    if(typePrice == 'positive') {
        if(element >= 0) {
            sum2 += element;
        } 
   } else if (typePrice == 'negative') {
       if(element < 0) {
           sum2 += element;
       }
   } else if(typePrice == 'all'){
       sum2 += element;
   }
   
}
if(sum >= sum2) {
    console.log(`Left - ${sum}`);
} else {
    console.log(`Right - ${sum2}`);
}
  
 
}

angryPet([1, 5, 1],
    1,
    "cheap",
    "all")