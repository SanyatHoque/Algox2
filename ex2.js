function equallyRearranging(str) {
    const new_str = str.split("");
    const new_str0 = str.split("");
    ans = [];
    new_str0.map((x,idx)=>{
        // console.log(x,idx)
        for (let i=0;i<new_str.length;i++){
            if (new_str[i]=="W") {
                 new_str.splice(i,1)
                 ans.unshift('W')
                 console.log('ans',ans)
                 continue;
            }
            
        }
        for (let i=0;i<new_str.length;i++){
            if (new_str[i]=="D") {
                new_str.splice(i,1)
                ans.unshift('D')
                console.log('ans',ans)
                continue;
            }
            
        }
        for (let i=0;i<new_str.length;i++){
            if (new_str[i]=="L") {
                new_str.splice(i,1)
                ans.unshift('L')
                console.log('ans',ans)
                continue;
            }
            
        }
        // console.log("new_str",new_str)
            
    })
    
    ans = ans.join("")
    return console.log('new_str',new_str,'ans',ans)
}
const str = "DLDD";
equallyRearranging(str)