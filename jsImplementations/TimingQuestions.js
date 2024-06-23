// setInterval using setTimeout

function mySetInterval(callback, delay) {
    let timeout = null;
    function iterate(){
        callback();
        timeout = setTimeout(iterate, delay);
    }
    timeout = setTimeout(iterate, delay);
    return timeout;
}

// mySetInterval(() => console.log('run'), 1000);


//setTimeout using setInterval

function mySetTimeout(callback, delay) {
    let timeout = null;
    let executed = false;
    timeout = setInterval(() => {
        if(!executed) {
            callback();
            executed = true;
            clearInterval(timeout);
        }
    }, delay);
}

mySetTimeout(() => console.log('stop after 1 sec'), 1000)