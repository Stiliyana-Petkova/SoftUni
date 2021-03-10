function cookingClass(budget, students, flour, egg, apron) {

    let priceEggs = egg * 10 * students;
    let apronPrice = apron * (Math.ceil(students * 0.2) + students);
    let flourPrice = 0;
    let sum = 0;

    let freePakeges = students - (Math.floor(students / 5));
    
    if(students / 5 <= 0) {
        flourPrice = flour * students;
    } else {
        flourPrice = flour * freePakeges;
    }

    sum = priceEggs + apronPrice + flourPrice;
    let neededMoney = sum - budget;
    if(sum <= budget) {
       console.log(`Items purchased for ${sum.toFixed(2)}$.`)
    } else {
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }

}

cookingClass(100,
    25,
    4.0,
    1.0,
    6.0)