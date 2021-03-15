function wordTracker(input) {

    let words = input.shift().split(' ');
    let obj = {};

    for (const current of words) {
        obj[current] = 0;
        
    }
    for (const line of input) {
        if(obj.hasOwnProperty(line)) {
            obj[line]++;
        }
    }
    let entries = Object.entries(obj);
    entries.sort((a,b) => b[1] - a[1]);
    for (const [word, value] of entries) {
        console.log(`${word} - ${value}`);
    }
}

wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task','sentence','sentence'
    ])