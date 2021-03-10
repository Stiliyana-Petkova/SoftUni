function solve(a, b) {
    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    
    let start = firstCode < secondCode ? firstCode : secondCode;
    let end = firstCode > secondCode ? firstCode : secondCode;
    let line = " ";
    for(let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + " ";
    }

    return line;
}

console.log(solve('a',
'd'));