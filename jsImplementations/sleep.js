async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log("Before sleep");
    await sleep(1000);
    console.log("After sleep");
}

example();