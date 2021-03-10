function palindrom(arr) {
    let result = '';
    for(let num of arr) {
        let isPolindrom = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        for(let i = 0; i <= mid; i++) {
            let lastIndex = num.length - 1;
            if(num[i] !== num[lastIndex - i]) {
                isPolindrom = 'false';
                break;
            }
        }
        result += isPolindrom + '\n';
    }
    return result;
}

console.log(palindrom([123,323,421,121]));