arr = [4,1,2,1,1,3,0];
let old_arr = arr;
let middleinx = old_arr.length/2;
let x = arr.findIndex(x1=>{
    return x1==0
})
let val = arr.splice(x,1);
val =parseInt(val.toString().replace(/[{}]/g, ""));
console.log(val)
arr.splice(middleinx, 0, val);
console.log(arr)