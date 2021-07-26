var total = 0 ;
function fibRec(n,string) {
    console.log('Running',string,'n =>',n)
    if(n<=1) {
        console.log('   return ==> Bounce from',string,'n =>',n)
        return n;
    };
    const x1 = fibRec(n-1,'first'); 
    const x2 = fibRec(n-2,'second');
    x = x1+x2;
    console.log('      Both fx ran, Adding==> ',x1,x2,string)
    console.log('      final return',x,string);
    return x;
}
const string = 'none';
console.log(fibRec(5,string));