// Promise.all
// -> All if all success return all promise in array
// -> one error then only error is returned

Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        const resolvedPromises = [];
        let pending = promises.length;
        if (Array.isArray(promises) && pending === 0) resolve(resolvedPromises);
        promises.forEach((promise, index) => {
            promise
                .then(res => {
                    resolvedPromises[index] = res;
                    pending -= 1;
                    if (pending === 0) resolve(resolvedPromises);
                })
                .catch(err => reject(err));
        });
    })
}

// const testPromise1 = new Promise((resolve, reject) => {
//     resolve('hello1')
// })
// const testPromise2 = new Promise((resolve, reject) => {
//     resolve('hello2')
// })
// const allPromises = Promise.myAll([testPromise1, testPromise2]);
// console.log(allPromises.then(res => console.log(res)))



//Promise.allSettled - return array of all the promises either resolved or rejected;
Promise.myAllSettled = function (promises) {
    return new Promise((resolve, reject) => {
        const resolvedRejectPromises = [];
        let pending = promises.length;
        if (Array.isArray(promises) && pending === 0) resolve(resolvedRejectPromises);
        promises.forEach((promise, index) => {
            promise
                .then(res => {
                    resolvedRejectPromises[index] = res;
                    pending -= 1;
                    if (pending === 0) resolve(resolvedRejectPromises);
                })
                .catch(err => {
                    resolvedRejectPromises[index] = err;
                    pending -= 1;
                    if (pending === 0) resolve(resolvedRejectPromises);
                })
        })
    })
}


// const testPromise1 = new Promise((resolve, reject) => {
//     resolve('hello1')
// });
// const testPromise2 = new Promise((resolve, reject) => {
//     reject('hello2')
// });
// const allPromises = Promise.myAllSettled([testPromise1, testPromise2]);
// console.log(allPromises.then(res => console.log(res)).catch(err => console.log(err)));


//Promise.race -> return first resolved promise that settles first and reject if any one rejected.
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        let pending = promises.length;
        if (Array.isArray(promises) && pending === 0) resolve(undefined);
        promises.forEach(promise => {
            promise
                .then(res => {
                    pending -= 1;
                    resolve(res);
                })
                .catch(err => reject(err))
        })
    })
}

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });
// Promise.myRace([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });


//Promise.any - return first resolved promise that settles first and reject if all promised rejected.
Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        let pending = promises.length;
        if(Array.isArray(promises) && pending === 0) resolve(undefined);
        promises.forEach(promise => {
            promise
            .then(res => {
                pending -= 1;
                resolve(res);
            })
            .catch(err => {
                pending -=1;
                if(pending === 0) reject('All Promises failed');
            })
        })
    }); 
}

const promise1 = Promise.reject(0);
const promise2 = new Promise((reject) => setTimeout(reject, 100, 'quick'));
const promise3 = new Promise((reject) => setTimeout(reject, 500, 'slow'));
const promises = [promise1, promise2, promise3];

Promise.myAny(promises).then((value) => console.log(value));