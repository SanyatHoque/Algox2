// const dict = {
//     0: [0,1,2,3]
// }
const dict = {};
const root = 5;
const idx = 0;
dict[idx] = [root]; 

dict[Object.keys(dict)[0]].push(18)
dict[1] = [101];
// dict[1] = Object.values(dict)[0].pop()
console.log(dict)
console.log(Object.keys(dict)[0])
console.log(Object.values(dict)[0])
// console.log(Object.values(dict)[0][Object.values(dict)[0].length-1])  // last indx
const b = [];
// console.log(a)
Object.values(dict)[0].map((x1)=>{
    if (x1==Object.values(dict)[0].pop()){
        true;
    }
    b.push(x1)
})
console.log('b',b)
console.log(dict)