// Infinite Curry -> sum(1)(2)(3)(4)(5)(6)();
function sum(a) {
    return function(b) {
        if(b === undefined) {
            return a;
        } else {
            return sum(a+b);
        }
    }
}
// console.log(sum(1)(3)(5)(7)(9)())

// --------------------------------------------- //

// Implement sum(2)(3)(1);
function sum(a) {
    return function(b) {
        return function (c) {
            return a+b+c;
        }
    }
}
// console.log(sum(2)(3)(1))