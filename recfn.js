var total = 0 ;
var idx1 = 0
var idx2 = 0
function fx(n,string) {
    if (string=='first') {
        console.log('idx1==>',idx1,'n==>',n)
        idx1++;
    } else if (string=='second') {
        console.log('idx2==>',idx2,'n==>',n)
        idx2++;
    }
    if(n<=1) {
        console.log('   return ==> Bounce from',string,'n==>',n)
        return n;
    };
    const x1 = fx(n-1,'first'); 
    const x2 = fx(n-2,'second');
    x = x1+x2;
    console.log('      Both fx ran, Adding==> ',x1,x2,string,'===>',x)
    return x;
}
const string = 'none';
console.log(fx(6,string));