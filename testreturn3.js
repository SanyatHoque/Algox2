
var idx1 = 0;
var idx2 = 0;
function testRet(c,string) {
    console.log('RUNNING FUNC===>',string,'c',c)
    if (string=='first') {
        console.log('idx1==>',idx1,'c==>',c)
        idx1++;
      } else if (string=='second') {
        console.log('idx2==>',idx2,'c==>',c)
        idx2++;
      }
    if (c==15) {
        return console.log('        SKIP LOOP==>',string,'==> c',c);
    } 
    c =  c+1;
    console.log('increasing C')
    testRet(c,'first');
    testRet(c,'second');
}
testRet(0,'    first')