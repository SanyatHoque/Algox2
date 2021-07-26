function threeCharsDistinct(s) {
    const str = s.split("");
    // console.log(str)
    const dict = {};
    array = []
    for (let i=0;i<str.length;i++) {
        if ((str[i]!==str[i+1]) && (str[i]!==str[i+2]) && (str[i+1]!==str[i+2]) && str[i]!==undefined && str[i+1]!==undefined && str[i+2]!==undefined){
        // console.log('array',str[i],str[i+1],str[i+2])
        array.push(1)
    }}
    const ans = array.length;
    return (ans);
}

threeCharsDistinct("abcdaaae")