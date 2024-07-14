function flatArray(array) {
    const output = [];
    if(!Array.isArray(array) && !array?.length) return output;
    for(let i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) {
            const outputArray = flatArray(array[i]);
            output.push.apply(output, outputArray)
        } else {
            output.push(array[i]);
        }
    }
    return output;
}

const array = [1, [2,3], 4, [5,6,7], [1,[4,3, [9]]]];
console.log(flatArray(array))
// [1,2,3,4,5,6,7]