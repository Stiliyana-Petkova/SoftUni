function angry(input, index, typeItem, typePrice) {
    let leftArray = input.splice(0,index);
    let entryPoint = input[0];
    let rightArray = input.splice(1);
    let sum = 0;
    let sum2 = 0;
    let newLeftArray = [];
    let newRightArray = [];

    for(let i = 0; i < leftArray.length; i++) {
        if(typeItem == 'expensive') {
            if(leftArray[i] >= entryPoint) {
                newLeftArray.push(leftArray[i]);
            }
        } else {
            if(leftArray[i] < entryPoint) {
                newLeftArray.push(leftArray[i]);
            }
        }
    }

    for(let i = 0; i < rightArray.length; i++) {
        if(typeItem == 'expensive') {
            if(rightArray[i] >= entryPoint) {
                newRightArray.push(rightArray[i]);
            }
        } else {
            if(rightArray[i] < entryPoint) {
                newRightArray.push(rightArray[i]);
            }
        }
    }

    for (let i = 0; i < newLeftArray.length; i++) {
        let element = newLeftArray[i];
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
    for (let i = 0; i < newRightArray.length; i++) {
       let element = newRightArray[i];
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
angry([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive",
    "positive")