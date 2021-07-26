function twoNumerSum(array,targetSum) {
    const dict = {};
    for (const x of array) {
        console.log('x',x)
        const potentialMatch = targetSum - x;
        if (dict[potentialMatch]) {
            console.log('potentialMatch',potentialMatch)
            console.log('dict',dict)
            return console.log([potentialMatch,x]);
        } 
        else if (!dict[potentialMatch]) {
            console.log('dict',dict)
            dict[x] = true;
        }
    }
    return console.log([]);
}
const array = [3,5,-4,8,11,1,-1,6,13,15,17,21,34,26,23,21,14,43,98]
twoNumerSum(array,49)