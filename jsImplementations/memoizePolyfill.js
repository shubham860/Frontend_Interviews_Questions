function memoize (func) {
    let cache = {};
    return function(...args) {
        const key = args.join();
        if(cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const fnReturn = func(...args);
        cache[key] = fnReturn;
        return fnReturn;
    }
}


// Optimisation by using map

function memoizeUsingMap (func) {
    let cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) {
            return cache.get(key);
        }
        const fnReturn = func(...args);
        cache.set(key, fnReturn);
        return fnReturn;
    }
}

const func = a => a * a;
const funcMemo = memoize(func);
console.log(funcMemo(2))