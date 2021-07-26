function solution(A,B) {
    let dec = A*B;

    // console.log(dec.toString(2));

    let x1 = dec.toString(2).toString();

    let x2 = x1.split("");

    // console.log(x2);

    let arr= [];
    x2.map(x => {
        x = parseInt(x);
        arr.push(x)
    })

    // console.log(arr);
    let ans = arr.reduce((a, b) => a + b, 0);
    // console.log('ans',ans);
    return console.log(ans);
}
solution(7,3)