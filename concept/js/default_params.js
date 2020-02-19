const defaultB = 30;
const getdefault = c => c * 2;

function compute(a = 10, b = getdefault(a)) {
    return a + b;
}

console.log(compute());