function firstLastNum(array) {

    for (let i = 0; i < array.length; i++) {
        let sum = array[i] + array[array.length - 1];
        
        console.log(sum);
        break;
        
    }
}

firstLastNum([20, 30, 40]);