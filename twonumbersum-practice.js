let arr = [3,5,-4,8,11,1,-1,6];

for (let i=0;i<arr.length-1;i++) {
    
    for (let j=0;j<arr.length-1;j++) {
        if (arr[i]==arr[j]) {continue;}
        if (arr[i]+arr[j]==10) {
            console.log('i,j',arr[i],arr[j]);
            return [arr[i],arr[j]];
        };

        console.log('NOT i,j',arr[i],arr[j]);
    }
}