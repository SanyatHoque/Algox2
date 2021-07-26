// function minimumWaitingTIme(queries) {
//     queries.sort((a,b) => a-b);
//     console.log('queries',queries)
//     let totalWaitingTime = 0;
//     for (let idx=0;idx<queries.length;idx++) {
//         const duration = queries[idx];
//         const queriesLeft = queries.length - (idx+1);
//         totalWaitingTime = totalWaitingTime + duration*queriesLeft;
//     }
//     return console.log('totalWaitingTime',totalWaitingTime);
// }

function minimumWaitingTIme(queries) {
    queries.sort((a,b) => a-b);
    console.log('queries',queries)
    var sum = 0;
    const waitingTime = [];
    for (let idx=0;idx<5;idx++) {
        if (idx==0) {
            waitingTime.push(0);
            console.log('0',waitingTime);
        }
        else if (idx==1) {
            waitingTime.push(queries[idx-1])
            console.log('1',waitingTime);
        }
        else if (idx==2) {
            waitingTime.push(queries[idx-1]+queries[idx-2])
            console.log('2',waitingTime);
        }
        else if (idx==3) {
            waitingTime.push(queries[idx-1]+queries[idx-2]+queries[idx-3])
            console.log('3',waitingTime);
            
        }
        else if (idx==4) {
            waitingTime.push(queries[idx-1]+queries[idx-2]+queries[idx-3]+queries[idx-4])
            console.log('4',waitingTime);
        }
    }
    const total = waitingTime.reduce((a, b) => a + b, 0)
    console.log('total',total)
}

queries = [3,2,1,2,6];
minimumWaitingTIme(queries)