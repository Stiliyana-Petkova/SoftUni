function counterStrike(array) {
    let energy = Number(array.shift());
    let wonBattles = 0;
    let sumEnergy = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        array.map(Number);
        sumEnergy += Number(array[i]);
        
      //  if(sumEnergy <= energy) {
            energy -= array[i];
            wonBattles++;
            count++;
            if(count == 3) {
                energy += wonBattles;
                count = 0;
                
            //}
         if (array[i] == "End of battle") {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`)
        }
    }

    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
}
}

counterStrike([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ])