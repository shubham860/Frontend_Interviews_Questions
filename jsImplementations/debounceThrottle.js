function apiCalling() {
    console.log('api is calling....');
}

function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if(timeout) clearInterval(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}


function throttle(fn, delay) {
    let flag=true;
    return function(...args) {
        if(flag) {
            fn(...args);
            flag=false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}

// using context
// function throttle(fn, delay) {
//     let flag=true;
//     return function(...args) {
//         let context = this;
//         if(flag) {
//             fn.apply(context, ...args);
//             flag=false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay)
//         }
//     }
// }

const debounceFunc = throttle(apiCalling, 200);
console.log(debounceFunc());