function employees(input) {

    for (let i = 0; i < input.length; i++) {
       let name = input[i];
       let number = input[i].length;
       console.log(`Name: ${name} -- Personal Number: ${number}`);
        
    }
       
}
    


employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])