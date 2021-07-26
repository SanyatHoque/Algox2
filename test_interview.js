const arr_max = []
function numbInt(arr) {
    console.log('arr.length',arr.length)

    for (let idx=0;idx<arr.length;idx++){
        if (arr[idx]%3==0){
            arr_max.push(arr[idx])  
        }
    }
    arr_max.sort(function(a,b){return b-a})
    return console.log('return arr_max',arr_max[0])
}
const arr = [3,6,9,11]
numbInt(arr)