const myModule = (function() {
    // Private function encapsulation, this is like a module
    const privateFunction = () => {
        console.log('i am private');
    }
    return {
        external: privateFunction
    }
})();

console.log(myModule.external())