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


Object.prototype.myFlatObject = function(prefix='') {
    const flattenObject = {};
    const object = this;
    for(let key in object) {
        const newKey = `${prefix}${key}`;
        if(typeof object[key] === 'object') {
            Object.assign(flattenObject, this[key].myFlatObject(`${newKey}.`))
        } else {
            flattenObject[newKey] = object[key];
        }
    }
    return flattenObject;
}

console.log(obj.myFlatObject());