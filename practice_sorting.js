let arr = [5,4,3,2,1];
let sorted_arr = [];

arr.map(x1 => {
    arr.forEach(x2 => {
        if (x1<x2) {
            return console.log(sorted_arr.unshift(x1));
        } 
    })
})
console.log(sorted_arr)
// for (let i=0;i<=5;i++) {
//     if (arr[i] == 3) {
//         continue;
//     } 
//     console.log(arr[i])
// }