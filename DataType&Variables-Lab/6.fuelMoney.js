function fuelMoney(distance, passengers, priceDisel) {
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.100;
    let money = fuel * priceDisel;
    console.log(`Needed money for that trip is ${money}lv.`)

}

fuelMoney(260, 9, 2.49);