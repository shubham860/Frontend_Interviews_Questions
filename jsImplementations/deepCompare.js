function deepCompare(source, target) {
    if (typeof(source) !== typeof(target)) return false;

    if (Array.isArray(source) && Array.isArray(target)) {
        if (source.length !== target.length) return false;
        return source.every((ele, index) => deepCompare(ele, target[index]));
    } else if (typeof(source) === 'object') {
        if (Object.keys(source).length !== Object.keys(target).length) return false;
        return Object.keys(source).every((key) => deepCompare(source[key], target[key]));
    }

    return source === target;
}

console.log(deepCompare([1,2,2], [1,2,2]));
console.log(deepCompare({a:1, b:2}, {a:1, b:2}))