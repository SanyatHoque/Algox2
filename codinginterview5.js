const A = [1,5,3,3,7];
// const A = [1,3,5,3,4];

function solution(A) {
    const arr = A;
    let sorted_arr = arr.slice().sort(function(a, b){return a - b});
    // console.log('arr',arr)
    for (let i=0;i<=arr.length-1;i++) {
        arr[i]
        // console.log('i',i)
        let x2 = 0;
        for (let j=i;j<=arr.length-1;j++) {
            // console.log('j',j)
            if (arr[i] <= arr[j]) {
                // console.log(arr[i],arr[j],'true');
            }
            // if (arr[i] == arr[j]) {
            //     x2 = x2 + 1;
            //     console.log(arr[i],arr[j],'false2',x2);
            // }
            if (arr[i] > arr[j]) {
                x2 = x2 + 1;
                // console.log(arr[i],arr[j],'false');
                if (x2==2) {
                    var b = arr[i];
                    arr[i] = arr[j];
                    arr[j] = b;
                }
            }
        }
    }
    // console.log(arr)
    // console.log(JSON.stringify(arr),'and',JSON.stringify(sorted_arr));
    if (JSON.stringify(arr)!==JSON.stringify(sorted_arr)) {
        return console.log(false);
    } else {
        return console.log(true);
    };
}

solution(A)