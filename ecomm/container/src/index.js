import('./bootstrap');


const input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: { L: 56, },
    Q: [1, 2],
  },
};

const flattenObject  = (inputObj , keyStr  = '', output = {})=>{
    for(key in inputObj){
        const newKey = keyStr ? `${keyStr}.${key}` : key;

        if(typeof inputObj[key] === 'object'){
            if(Array.isArray(inputObj[key])){
                inputObj[key].forEach((element, index)=> {
                    const arrKey = `${newKey}.${index}`
                    if(typeof element === 'object'){
                        flattenObject(element,arrKey ,output)
                    }else{
                        output[arrKey] = element;
                    }
                });
            }else{
                flattenObject(inputObj[key] , newKey , output)
            }
        }else{
            output[newKey] = inputObj[key];
        }
    }
    return output;
}


console.log(flattenObject(input));




















// function flattenObject(obj, parentKey = "", result = {}) {
//   for (let key in obj) {
//     const newKey = parentKey ? `${parentKey}.${key}` : key;

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       if (Array.isArray(obj[key])) {
//         // Handle arrays
//         obj[key].forEach((value, index) => {
//           const arrayKey = `${newKey}.${index}`;
//           if (typeof value === "object" && value !== null) {
//             flattenObject(value, arrayKey, result);
//           } else {
//             result[arrayKey] = value;
//           }
//         });
//       } else {
//         // Handle nested objects
//         flattenObject(obj[key], newKey, result);
//       }
//     } else {
//       result[newKey] = obj[key];
//     }
//   }
//   return result;
// }

