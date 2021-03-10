function solve(a, b, c) {

    function sum(x, y) {
        return x+y;
    }

    return sum(a, b) - c;
}

console.log(solve(23, 6, 10))