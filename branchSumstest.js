// const dict = {
//     key1: [0,1,2,3],
//     key2: [0,1,2,4]
// }

// if (dict.key1!==dict.key2) {
//     console.log("r")
//     console.log(Object.values(dict))
// }


const dict = {
    1: [0,1,2,3],
    idx2: [0,1,2,4]
}
const idx = 1;
if (dict.idx==dict.idx-1) {
    console.log("r")
    console.log(Object.values(dict))
} else {
    console.log("nope")
}
dict[Object.keys(dict)[0]].push(18)
console.log(Object.keys(dict)[0])
console.log(Object.values(dict)[0])
// console.log(dict)