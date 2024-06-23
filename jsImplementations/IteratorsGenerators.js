// Iterators - it is any object which implements iterator protocol by having next() method and retir
// object with two properties { value: next value in sequence, done: boolean, true if last value consumed}

function fruitsIterator(value) {
    let currentIndex = 0;
    return  {
        next: function() {
            if(currentIndex < value.length) {
                return { value: value[currentIndex++], done: false}
            } else {
                return {done: true}
            }
        }
    }
}

const fruits = ['apple', 'mango', 'banana'];
const data = fruitsIterator(fruits);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
}

const itRanges = makeRangeIterator(0,10);
console.log(itRanges.next());
console.log(itRanges.next());
console.log(itRanges.next());
console.log(itRanges.next());
console.log(itRanges.next());