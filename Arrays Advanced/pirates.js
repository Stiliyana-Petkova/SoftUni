function pirates(days, dailyPlunder, expectedPlunder) {
    let sum = 0;
    let count = 0;
    let countShips = 0;
    for(let i = 1; i <+ days; i++) {
        countShips++;
        count++;
        if(count == 3) {
            sum += dailyPlunder * 0.50 + dailyPlunder;
            count = 0;
            continue;
        }
        sum += dailyPlunder;
        
        if(countShips == 5) {
            sum *= 0.70;
            countShips = 0;
            continue;
        }
  
    }
    let percentage = (sum / expectedPlunder) * 100;
    
    if(sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

pirates(0, 20, 10);