
const obj = {
  first: "first",
  name: {
    firstname: "Shubham",
    lastname: "Chauhan",
    phone: {
      mobile: "999999999",
    },
  },
  address: {
    city: "Moradabad",
    locality: "Linepar",
    pincode: 244001,
    country: "India",
  },
};

// Ans
// obj = {
//   "first": "first",
//   "name.firstname": "Shubham",
//   "name.lastname": "Chauhan",
//   "address.city": "Moradabad",
//   "address.locality": "Linepar",
//   "address.pincode": 244001,
//   "address.country": "India"
// }

function flatObject(object, prefix = '') {
    const flattenObject = {};
    for(let key in object) {
        const newKey = `${prefix}${key}`;
        if(typeof object[key] === 'object') {
            Object.assign(flattenObject, flatObject(object[key], `${newKey}.`));
        } else {
            flattenObject[newKey] = object[key];
        }
    }
    return flattenObject;
}

console.log(flatObject(obj))