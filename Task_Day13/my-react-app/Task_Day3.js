// 1️ Custom reduce to Compute Nested Structures

  Array.prototype.nestedReducer=function (callback, basevalue) {
    let result = basevalue;

    for (let i = 0; i < this.length; i++) {
        const current = this[i];

        if (Array.isArray(current)) {
            result = current.nestedReducer(callback, result);
        }
        else {
            result = callback(result, current);
        }

    }
    return result;

}

//usage
const data = [1, [2, 3], 4];
console.log(data.nestedReducer((a, b) => a + b, 0));
console.log(data.nestedReducer((a,b)=>a*b,1));





// 2 Implement deep cloning without JSON.parse.

function deepClone(value){

    if(value===null || typeof value !== "object"){
        return value;
    }

    const clone=Array.isArray(value) ? []:{};
    for(let key in value){
        if(value.hasOwnProperty(key)){
            clone[key]=deepClone(value[key])
        }
    }

    return clone;
}

const info = {
  name: "Shiva",
  skills: ["JS", "React"],
  address: {
    city: "Pune",
    pin: 411001
  }
};

const copy = deepClone(info);

copy.address.city = "Mumbai";
copy.skills.push("Node");

console.log(info.address.city); 
console.log(info.skills);    
console.log(info.name);
console.log(copy.address.city);

  

 
// 3 Reusable Destructuring Utility

function destructure(obj, keys, defaults = {}) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    } else {
      result[key] = defaults[key];
    }
  }

  return result;
}

//usage
const user = {
  name: "Shiva",
  age: 22,
  city: "Pune"
};

const extracted = destructure(
  user,
  ["name", "age", "country"],
  { country: "India" }
);

console.log(extracted);
