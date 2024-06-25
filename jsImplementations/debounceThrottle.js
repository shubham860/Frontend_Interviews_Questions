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

// "0 - M
// 200 - S
// 900 - D
// 2000 - H
// 3100 - O
// 5000 - N
// 5600 - I
// 1000 ms"

/*

What timestamp, what input - soln - diff b/w two consecutive event is greater then or equal to given delay.

MSD - 1900ms
MSDH - 3000ms
MSDHO - 4100ms
MSDHONI - 6600ms

*/


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