function solve(input) {

    let array = input.toLowerCase().split(' ');
    let obj = {};

    for (const line of array) {
       obj[line] = 0;
    }
    for(let line of array) {
       if(obj.hasOwnProperty(line)) {
           obj[line]++;
       }
    }

    let entries = Object.entries(obj)
    .filter( x => x[1] % 2 != 0)
    .sort((a,b) => b[1] - a[1])

    let newArr = []
    for (let [key, value] of entries) {
       newArr.push(key)
   }
    
    console.log(newArr.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');