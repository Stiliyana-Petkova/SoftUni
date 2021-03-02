function spiceMustFlow(yeild) {
    let consumed = 0;
    let count = 0;
    let total = 0;
   
    while(yeild >= 100) {
        consumed = yeild - 26; 
        total += consumed;
        yeild = yeild - 10; 
        count++;

    }
    if(total < 26) {
        console.log(count);
        console.log(total);
    } else {

    let result = total - 26;
    console.log(count);
    console.log(result);
    }

}

spiceMustFlow(111)