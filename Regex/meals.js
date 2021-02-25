function solve(input) {
    let obj = {};
    let unlike = 0;
    for (let command of input) {
        let [el,name,meal] = command.split('-');
        
        switch (el) {
            case 'Like':
                if (!obj.hasOwnProperty(name)) {
                    obj[name] = [meal];
                } else {
                    if (!obj[name].includes(meal)) {
                        obj[name].push(meal);
                    }
                }
                break;
            case 'Unlike':
                if (obj.hasOwnProperty(name)) {
                    if (obj[name].includes(meal)) {
                        unlike++;
                        obj[name].splice(obj[name].indexOf(meal), 1);
                        console.log(`${name} doesn't like the ${meal}.`);
                    } else if (!obj[name].includes(meal)) {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${name} is not at the party.`);
                }
                break;
        }
    }
    let arr = Object.entries(obj);
    arr.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    arr.forEach(el => {
        console.log(`${el[0]}: ${el[1].join(', ').trim()}`);
    });
    console.log(`Unlike meals: ${unlike}`);
}

solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Penelope-dessert',
    'Stop'
  ])