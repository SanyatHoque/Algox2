function minimumWaitingTIme(queries) {
    queries.sort((a,b) => a-b);
    var sum = 0;
    const waitingTime = [];
    for (let i=1;i<queries.length;i++){
        sum = sum + queries[i-1];
        console.log(sum)
        waitingTime.push(sum);
    };
    const total = waitingTime.reduce((a,b) => a+b,0)
    return total
}

queries = [3,2,1,2,6];
console.log(minimumWaitingTIme(queries))