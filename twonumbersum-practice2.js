let arr = [3,5,-4,8,11,1,-1,6];

var hash = {};
// hash[arr[0]]=true;
    // console.log('Object',Object.keys(hash).length)
    // console.log('hash',hash)
    function twoNumerSum () {
    for (let i=0;i<arr.length;i++) {
        let y = 10-arr[i];
        // if (Object.keys(hash)[i]) {
        //     if (Object.keys(hash)[i]!==y) {
        //         hash[arr[i]]=true;
        //         console.log('hash1',hash)
        //     }
        // }
        // if (hash[arr[i]]) {
        //     // console.log('hash56',hash)
        //     continue
        // }
        if (!hash[arr[i]]) {
            console.log('i',i)
            for (let j=0;j<=i;j++) {
                console.log('--j',j)
                console.log('--y',y)
                if (arr[j]!==y) {
                    hash[arr[i]]=true;
                    console.log('----hash3',arr[j])
                }
                if (arr[j]==arr[i]) {continue}; 
                if (arr[j]==y) {
                    // hash[arr[i]]=true;
                    console.log('--------------found',arr[j],arr[i]);
                    return [arr[j],arr[i]];
                }
            }
        }
        console.log('hash -- i',hash)
    }
}


console.log('ans',twoNumerSum())