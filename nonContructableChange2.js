const change = [5,7,1,1,2,3,22]; 
// const chg = change.slice().sort(function(a, b){return a - b});
// console.log('chg',chg,'change',change)

let solArr = [];
const arr = [1,1,2,3,5,7,22];


let searchArr = 1;

while (searchArr!==solArr[solArr.length-1]) {
    console.log('======> solArr',solArr);
    console.log('======> searchArr',searchArr);
    for (let x2=0;x2<arr.length;x2++) {
        var res = 0;
        // console.log('1')
        for (let x1=0;x1<arr.length;x1++) {
            // console.log('2')
            
            if (arr.find(y => searchArr==y)) {
                console.log('1. x2',x2,' ---> x1',x1,'searchArr',searchArr);
                // console.log('searchArr',searchArr);
                if (!solArr.find(y=>searchArr==y)) {solArr.push(searchArr)};
                // console.log('solArr',solArr)
                continue;
            };
            if (x2==x1) {
                console.log('2. x2',x2,' ---> x1',x1,'searchArr',searchArr);
                continue;
            }
            else if (x1==0) {
                res = arr[x2] + arr[x1]
                console.log('3. x2',x2,' ---> x1',x1,'res',res,'searchArr',searchArr);
                if (searchArr==res) {
                    if (!solArr.find(y=>searchArr==y)) {solArr.push(searchArr)};
                    console.log('5. x2',x2,' ---> x1',x1,'res',res,'searchArr',searchArr);
                    continue;
                }
            }        
            else if (x1!==0) {
                res = res + arr[x1];
                console.log('4. x2',x2,' ---> x1',x1,'res',res,'searchArr',searchArr);
                if (searchArr==res) {
                    if (!solArr.find(y=>searchArr==y)) {solArr.push(searchArr)};
                    console.log('6. x2',x2,' ---> x1',x1,'res',res,'searchArr',searchArr);
                    continue;
                }
            };
            // console.log('x2',x2,' ---> x1',x1,'res',res);
        };
        if (searchArr==solArr[solArr.length-1]) {searchArr = searchArr + 1};
        console.log('======> solArr',solArr);
        console.log('======> searchArr',searchArr);
    };
};
