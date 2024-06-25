const findPath = (object, path) => {
    const keys = path.split('.');
    let temp = object;
    for (let i = 0; i < keys.length; i++) {
        try {
            if (!temp.hasOwnProperty(keys[i])) { return undefined; }
            temp = temp[keys[i]];
        } catch {
            return undefined;
        }
    }
    return temp;
};


const obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null