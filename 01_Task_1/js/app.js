const data = [1, 2, 3, 4, 5];

/**
 * Write your code below!
 */

function soucet(a, b, ...rest) {
   
    let c = 0;
    rest.forEach(cislo => {
        c += cislo;
    })
   
    const result = a + b + c;
    return result;
}

console.log( soucet(1, 2) );
console.log( soucet(1, 2, 3, 4, 5) );

console.log( soucet(100, 200, ...data) );