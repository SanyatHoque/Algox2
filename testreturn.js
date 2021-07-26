function testRet(b,c,string) {
    console.log('RUNNING FUNC===>',string)
    if (b==0) {
        return console.log('        SKIP LOOP',string);
    }
    const a = b + c ; 
    // console.log('a === >>',a, string)
    testRet(0,2,'first');
    testRet(0+1,2,'second');
}

// function testRet(b,c) {
//     for (let i=0;i<10;i++){
//         if (i==6) {
//             return console.log('skip loop');
//         }
//         const a = b + c ; 
//         console.log('i =>',i,'      a',a)
//     }
//     console.log('testRet',testRet(1,2));
// }

testRet(1,2,'     first')