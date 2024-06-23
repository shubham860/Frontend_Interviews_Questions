const obj = {
    name: 'shubham',
    city: 'moradabad'
}

function printInfo (gender, age) {
    return `${this.name}(${gender}, ${age}) from ${this.city}`;
}

Function.prototype.myBind = function(context, ...args) {
    context.fn = this;
    return function(...next) {
        return context.fn(...args, ...next);
    }
}
// const dataPrinter = printInfo.myBind(obj);
// console.log(dataPrinter('male', '26'));

// -------------------------------------------------------------------------------------- //
 
Function.prototype.myCall = function(context, ...args) {
    context.fn = this;
    return context.fn(...args);
}
// console.log(printInfo.myApply(obj, 'M', '26'))

// -------------------------------------------------------------------------------------- //

Function.prototype.myApply = function(context, ...args) {
    context.fn = this;
    return context.fn(...args);
}
// console.log(printInfo.myApply(obj, ['M', '26']))
