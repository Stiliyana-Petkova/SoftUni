function store(stock, order) {
    
    let obj = {};
    for (let i = 0; i < stock.length; i+=2) {
       let product = stock[i];
       let quantity = Number(stock[i + 1]);
       obj[product] = quantity;
    }
       
        
        for (let i = 0; i < order.length; i+=2) {
        let prod = order[i];
        if(obj.hasOwnProperty(prod)) {
            obj[prod] += Number(order[i + 1]);
        } else {
            obj[prod] = Number(order[i + 1]);
        }
      
    }
    let objKeys = Object.keys(obj);
    for (let key of objKeys) {
        console.log(`${key} -> ${obj[key]}`)
    }
}



store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])