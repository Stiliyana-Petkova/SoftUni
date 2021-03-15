function meetings(input) {

    let book = {};

    for (const line of input) {
        let [day,name] = line.split(' ');
        
        if(book.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            book[day] = name;
        }
    }

    for (const key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
    
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);