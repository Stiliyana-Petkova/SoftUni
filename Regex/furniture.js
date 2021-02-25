function furniture(input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quant>\d+)/;
    let total = 0;
    let name = `Bought furniture:\n`
    let array = [];
    

    for (let line of input) {
        if (line == 'Purchase') {
            break;
        }

        let matches = regex.test(line);
        if (matches) {
            array.push(line);

        }
    }

    for (let line of array) {
        let el = line.split(regex);
        console.log(el);
        el.shift();
        el.pop();
        
        name += el[0] + '\n';


        let price = Number(el[1]);
        let quant = Number(el[2]);
        total += price * quant;


    }
    
    console.log(`${name}Total money spend: ${total.toFixed(2)}`);


}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])