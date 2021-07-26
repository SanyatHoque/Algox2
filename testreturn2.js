function testRet(b,c,string) {
    console.log('RUNNING FUNC===>',string)
    if (b==0) {
        return console.log('        SKIP LOOP',string);
    }
    const a = b + c ; 
    console.log('Inside loop 1 ')
    testRet(0,2,'first 1 ');
    testRet2(0+1,2,'second 2 ');
}
function testRet2(b,c,string) {
    console.log('RUNNING FUNC   2 ===>',string)
    if (b==0) {
        return console.log('        SKIP LOOP 2 ',string);
    }
    const a = b + c ; 
    console.log('Inside loop 2 ')
    testRet(0,2,'first 1 ');
    testRet2(0+1,2,'second 2 ');
}
testRet(1,2,'     first')