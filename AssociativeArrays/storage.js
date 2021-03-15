function storage(input) {
    let store = {};

    for (const line of input) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let qty = Number(tokens[1]);

        if(store.hasOwnProperty(product)) {
            store[product] += Number(qty);
         } else {
             store[product] = qty;
             }
    }
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);