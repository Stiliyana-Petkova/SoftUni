function addAndSub(arr){

    let firstSum = 0;
    for (let el of arr) {
        firstSum += el;
        
    }

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];

        if(element % 2 == 0) {
            arr[index] += index;
        } else {
            arr[index] -= index;
        }
        
    }

    let secondSum = 0;
    for (let el of arr) {
        secondSum += el;
        
    }
    console.log(arr);
    console.log(firstSum);
    console.log(secondSum);

}

addAndSub([5, 15, 23, 56, 35]);