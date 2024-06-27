// f(a,b,c) => f(a)(b)(c)

function convertCurry (fn) {
    return function curried(...args) {
            if (args.length >= fn.length) {
                return fn(...args.slice(0, fn.length));
            } else {
                return function(...next) {
                    console.log('else', args, next)
                    return curried(...args, ...next);
                }
            }
    }
}

const sum = (a,b,c,d) => {
    return a+b+c+d;
};

const curryFunction = convertCurry(sum);
console.log(curryFunction(1)(2)(3)(4)(5)(6)) // creating error we need to fix it for n params

// Running
// else [ 1 ] [ 2 ]
// else [ 1, 2 ] [ 3 ]
// else [ 1, 2, 3 ] [ 4 ]
// ---> args.length >= fn.length = 10