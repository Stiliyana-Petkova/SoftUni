function partyTime(input) {
    let array = [];
    let regular = [];
    let guests
    let vip = [];
    count = 0;

    for (let line of input) {

        if (line == 'PARTY') {
            let index = input.indexOf('PARTY');
            guests = input.splice(index + 1)
            break;
        }
         array.push(line);
    }

    for (let line of array) {
        if (!guests.includes(line)) {
            count++;
            if( isNaN(line[0])) {
            regular.push(line);
            } else if( !isNaN(line[0])) {
                vip.push(line);
            }
        }
    }

    console.log(count);
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'2cdjciif',
'1jdjdkdk',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])