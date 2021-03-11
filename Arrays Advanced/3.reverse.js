function reverse(n, array) {

    array.length = n;
    let result = array.reverse();
    console.log(result.join(' '));

}

reverse(3, [10, 20, 30, 40, 50]);