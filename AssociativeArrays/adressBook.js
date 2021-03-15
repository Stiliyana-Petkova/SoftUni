function adressBook(input) {
    let book = {};

    for (const line of input) {
        let [name,adress] = line.split(':');
        book[name] = adress;
    }
    let entries = Object.entries(book);
    entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    for (const [name,ad] of entries) {
        console.log(`${name} -> ${ad}`);
    }
}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])