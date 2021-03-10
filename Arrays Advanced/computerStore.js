function computerStore(array) {

    let customer = array.pop();
    let price = 0;
    let taxes = 0;
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        
        if(array[i] < 0) {
            console.log(`Invalid price!`);
        } else {
            price += Number(array[i]);
        }
  }
    taxes = price * 0.2;
    
    if(customer == 'regular') {
        total = price + taxes;
    } else {
        total = (price + taxes) * 0.90;
    }

    if(total == 0) {
        console.log(`Invalid order!`)
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`)
    }
    

    

}

computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ])