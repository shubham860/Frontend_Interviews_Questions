
// PolyFill of map
Array.prototype.myMap = function(callback) {
    const results = [];
    for(let i=0; i<this.length; i++){
        results.push(callback(this[i], i, this));
    }
    return results;
}
// const data = [1,2,4,5].myMap((item, index) => item);

// -------------------------------------------------------------------------------------- //

// PollyFill of Filter
Array.prototype.myFilter = function(callback) {
    const results = [];
    for(let i=0; i<this.length; i++) {
        if(callback.call(this, this[i], i, this)) { // to call the callback with array and other params
            results.push(this[i]);
        }
    }
    return results;
}
// const data = [1,2,4,5].myFilter((item, index) => item === 2);


// -------------------------------------------------------------------------------------- //

//PolyFill of reduce
Array.prototype.myReduce = function(callback, initialState) {
    let accumulator = initialState;
    for(let i=0; i<this.length; i++) {
        if(accumulator!==undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this); // undefined because doesn't use this for calculations.
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}
// const data = [1,2,4,5].myReduce((accumulator, currentValue) =>  accumulator+currentValue);

// -------------------------------------------------------------------------------------- //

//Polyfill of forEach
Array.prototype.myForEach = function(callback) {
    let results = [];
    for(let i=0; i<this.length; i++) {
        results.push(callback(this[i], i, this))
    }
    return results
}
// const data = [1,2,4,5].myForEach(item => item*2);
// console.log(data);

// -------------------------------------------------------------------------------------- //

//Polyfill of concat
Array.prototype.myConcat = function(array) {
    let output = this.slice();
    for(let i=0; i<array.length; i++) {
        output.push(structuredClone(array[i]));
    }
    return output;
} 
// console.log([2,4,5].myConcat([1,[2,4], [4,3], [3]]));

// -------------------------------------------------------------------------------------- //

//PolyFill of findIndex
Array.prototype.myFindIndex = function(element) {
    for (let i=0; i<this.length; i++) {
        if(this[i] === element) {
            return i;
        } 
    }
    return -1;
}
// console.log([1,2,4].myFindIndex(2))

// -------------------------------------------------------------------------------------- //

//PolyFill of findLastIndex 
Array.prototype.myFindLastIndex = function(element) {
    let lastIndex = -1;
    for(let i=0; i<this.length; i++) {
        if(this[i] === element) {
            lastIndex = i;
        }
    }
    return lastIndex;
}
// console.log([1,2,4,1].myFindLastIndex(1))

// -------------------------------------------------------------------------------------- //

//PolyFill of array.at 
Array.prototype.myAt = function(index) {
    if (index > this.length - 1) {
        throw new Error("Index out of bound");
    }
    for (let i=0; i < this.length; i++) {
        if (i === index) {
            return this[i];
        }
    }
}