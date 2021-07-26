function tournamentWinner(competitions,results) {
    const scores = {};  // Initialize dictionary
    for (let idx=0; idx<competitions.length; idx++) {
        const [homeTeam, awayTeam] = competitions[idx];  // destructuring
        console.log('competitions[idx] -->',competitions[idx],'     homeTeam --> ',homeTeam,'    awayTeam --> ',awayTeam)
        // for the same idx, validate results array,
        if (results[idx] === 1) {    //if homeTeam wins
            var winningTeam = homeTeam;
        } else if (results[idx] === 0) {    //if awayTeam wins
            var winningTeam = awayTeam;
        }
        if (!scores[winningTeam]) {   // create a key in the scores->Object
            scores[winningTeam] = 0;
        }
        scores[winningTeam] = scores[winningTeam] + 3;
    }
    let arr = Object.values(scores);    // an array
    console.log('arr',arr)
    const maxValues = Math.max(...arr);  // spread operator is needed since arr is an array ES6 syntax
    let key_scores = Object.keys(scores);   // also an array
    console.log('key_scores',key_scores); 
    const maxKey = Object.keys(scores).find(x1 => scores[x1] === maxValues);  // find method works with array
    console.log('maxValues',maxValues);
    console.log('scores',scores);
    console.log('maxKey',maxKey);
    return console.log(Object.keys(scores),maxKey);
}

{
    competitions =  [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    results = [0, 0, 1]
}
tournamentWinner(competitions,results)

// small exercise to destructure keys in an Object, x : 
let x = {x1:1,x2:2};
let { x1, x2 } = x;
console.log(x1); // 'John'
console.log(x2); // 'Doe'