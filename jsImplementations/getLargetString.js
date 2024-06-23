const array = [
    "a",
    "ab",
    [
      "abcd",
      "derfg",
      ["asdasd", "DGdgdfsg", "asdgsdfhsdhf", "sdafsafsadfsadfsdfsadf"],
      "sdfsdfsd",
      "asdfsaf",
    ],
    "sdafasdf",
    "sdfsadf",
    "sadfsafsd",
];

function getLargestString(stringArray) {
    let largestString = '';
    for(let string of stringArray) {
        if(!Array.isArray(string)) {
            if(largestString.length < string.length) {
                largestString = string;
            }
        } else {
            const largestSubString = getLargestString(string);
            if(largestString.length < largestSubString.length) {
                largestString = largestSubString;
            }
        }
    }
    return largestString
}

console.log(getLargestString(array));