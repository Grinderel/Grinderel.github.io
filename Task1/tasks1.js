function calcD(a, b, c) {
    return b * b - 4 * a * c;
}

console.log(calcD(4,4,1));

let Min = (a,b)=> a>b ? b : a;
console.log('Min: ', Min(1,2));

let Max = (a,b)=> a>b ? a : b;
console.log('Max: ', Max(2,3));

let Eq = (a,b) => a===b;
console.log('Eq: ', Eq(2,2));