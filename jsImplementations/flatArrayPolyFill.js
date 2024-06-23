// flat(), flat(depth)

Array.prototype.myFlat = function(depth = 1) {
    const flattenArray = [];
    for(let i=0; i<this.length; i++) {
        if(Array.isArray(this[i]) && depth > 0) {
            flattenArray.push(...this[i].myFlat(depth - 1))
        } else {
            flattenArray.push(this[i]);
        }
    }
    return flattenArray;
}

const array = [1,2,4,5,[3,5]];
console.log(array.myFlat());