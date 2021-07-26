function nonConstructableChange(coins) {
    coins.sort((a,b) => a-b);

    let total_leastContructableChange = 0;  // initialize val
    coins.map((coin)=> { // where x is the next coin
        // if nxt coin is > total_leastContructableChange ====> ans is total_leastContructableChange
        if (total_leastContructableChange + 1 < coin) {
            // end loop
            return console.log('total_leastContructableChange',total_leastContructableChange);
        }
        console.log(`
        coin = ${coin},
        total_leastContructableChange = ${total_leastContructableChange},
        total_leastContructableChange + 1 >= coin,
        New total_leastContructableChange = total_leastContructableChange + coin, ${total_leastContructableChange + coin}
        `)
        // if nxt coin is < total_leastContructableChange, its all good
        if (total_leastContructableChange + 1 >= coin) {
            total_leastContructableChange = total_leastContructableChange + coin ;
        }
    })
    // if x is always <= total_leastContructableChange + 1 
    // end loop
    return console.log('total_leastContructableChange',total_leastContructableChange);
}
    
const coins= [5,7,1,1,2,3,21];
nonConstructableChange(coins)