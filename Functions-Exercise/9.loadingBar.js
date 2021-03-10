function loadingBar(n) {
    let symvol = n / 10;
    let loader = '..........';
    let procentArr = loader.split('');

    if(n == 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);

    } else {
        for(let i = 0; i < symvol; i++) {
            procentArr.pop();
            procentArr.unshift('%');
        }

        console.log(`${n}% [${procentArr.join('')}]`);
        console.log(`Still loading...`)
    }

    

}

loadingBar(30);