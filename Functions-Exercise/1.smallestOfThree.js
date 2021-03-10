function solve(x, y, z) {
let small = Number.MIN_SAFE_INTEGER;

if(x > small) {
    small = x;
}

if(y < small) {
    small = y;
}

if(z < small) {
    small = z
}
console.log(small)
}

solve