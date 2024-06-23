/* DeepCopy Object - 3 Methods
** 1. JSON.parse(JSON.stringify(obj))
** 2. structuredClone; - creates a deep clone of a given value using the structured clone algorithm.
** 3. Manual
*/

function deepClone(object) {
    if(object === null ||
       object === undefined ||
       typeof object === 'string' ||
       typeof object === 'number' ||
       typeof object === 'function' ||
       typeof object === 'boolean' || 
       typeof obj === 'symbol'
    ) {
        return object;
    }

    if(Array.isArray(object)) {
        return object.slice();
    }

    const clonedObject = {};
    const keys = Object.keys(object);
    for(let i=0; i<keys.length; i++) {
        clonedObject[keys[i]] =  deepClone(object[keys[i]]);
    }
    return clonedObject;
}


const test = {
    a: 10,
    b: {
        c: [1, 2, 3],
        d: function() {
            console.log("d");
        }
    }
}

console.log(deepClone(test));