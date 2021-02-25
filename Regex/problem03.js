function restaurant(input) {
    objComida = {};
    let unlike = 0;
    let index = 0;
    let line = input[index];
    while (line != 'Stop') {
        let tokens = line.split('-');
        let el = tokens[0];
        let person = tokens[1];
        let food = tokens[2];
        if (el == 'Like') {
            if (!objComida.hasOwnProperty(person)) {
                objComida[person] = [food];
            } else {
                if (!objComida[person].includes(food)) {
                    objComida[person].push(food);
                }
            }
        } else if (el == 'Unlike') {
            if (objComida.hasOwnProperty(person)) {
                if (objComida[person].includes(food)) {
                    unlike++;
                    objComida[person].splice(objComida[person].indexOf(food), 1);
                    console.log(`${person} doesn't like the ${food}.`);
                } else if (!objComida[person].includes(food)) {
                    console.log(`${person} doesn't have the ${food} in his/her collection.`);
                }
            } else {
                console.log(`${person} is not at the party.`);
            }
            
    }
    line = input[index++];
}
let arrayMeals = Object.entries(objComida);
arrayMeals.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
arrayMeals.forEach(element => {
    console.log(`${element[0]}: ${element[1].join(', ').trim()}`);
});
console.log(`Unliked meals: ${unlike}`);
}

restaurant([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
])