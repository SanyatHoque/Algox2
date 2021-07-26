function dep(str) {
let str1 = str
const myArr = str1.split("s");
// console.log(myArr)
newMyArr = [];
myArr.map(x1=>{
    x1 = x1+'s'
    // console.log(x1)
    newMyArr.push(x1);
})
// console.log(newMyArr)
symbolArr = [];
newMyArr.map(x1=>{
    if (x1=='minus') {
        x1 = '-';
        symbolArr.push(x1)
    } else if (x1=='plus') {
        x1 = '+';
        symbolArr.push(x1)
    } 
    
})

symbolArr = symbolArr.join().replace(/[{,}]/g, "")
return console.log(symbolArr)
}
dep("plusminus")
