function callOnlyOnce(cb) {
    let called = 0
    return function (context, ...args) {
        if(called < 1) {
            if(typeof cb === 'function') {
                console.log(context)
                cb.apply(context, args);
                called += 1;
            } else {
                throw new Error('Callback is not a function');
            }
        }
    }   
};

const myFunc = (...args) => {
    console.log("hello", args);
}
const updated = callOnlyOnce(myFunc);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);