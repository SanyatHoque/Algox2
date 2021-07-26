const N = 10000000;
const arr = [];
const finalStr='';
idx = 0;
for (let numb=1;numb<=N;numb++) {
    var str2 = '';
    var str3 = '';  
    idx = idx +1 ;

    if (numb%3==0) {
        str2 = 'fizz'; 
        // arr.push(str);
    } 
    if (numb%5==0) {
        str3 = 'buzz';
        // arr.push(str);
    }
    const fstr = str2+str3;
    console.log(fstr);
    arr.push(fstr)
}

console.log('arr',arr)
