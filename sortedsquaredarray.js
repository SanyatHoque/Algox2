arr =  [-4,-2,0,1,3];

function ssa(array) {
    const new_array = [];
    array.map((x)=>{
        new_array.push(x*x);
    });
    new_array.sort((a,b) => {return a-b});
    return new_array;
}

console.log(ssa(arr));
