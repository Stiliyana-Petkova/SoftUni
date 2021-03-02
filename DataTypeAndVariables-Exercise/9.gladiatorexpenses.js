function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBrakes = Math.trunc(lostFights / 2);
    let swordBrakes = Math.trunc(lostFights / 3);
    let shieldBrakes = Math.trunc(lostFights / 6);
    let armorBrakes = 0;

    if(shieldBrakes >= 2) {

     armorBrakes = Math.trunc(shieldBrakes / 2);
    }

    let total = helmetBrakes * helmetPrice + swordBrakes * swordPrice + shieldBrakes * shieldPrice + armorBrakes * armorPrice;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}

gladiator(23,
    12.50,
    21.50,
    40,
    200)