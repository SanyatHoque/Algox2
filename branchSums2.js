const nodes= {
    5:{left:4,right:7,value:5},
    4:{left:1,right:2,value:4},
    1:{left:null,right:null,value:1},
    2:{left:null,right:null,value:2},
    // 7:{left:3,right:10,value:7},
};
// const tree_val = nodes[5].value;
// const dict ={};
// idx = 0;

function branchSums2(nodes){
    var idx = 0;
    const dict = {}
    const root=5;
    var tree_val = nodes[root].value;
    
    // function  tree_val, idx, root
    dict[idx] = [root];
    if (nodes[tree_val].left){
        dict[Object.keys(dict)[idx]].push(nodes[tree_val].left)
        tree_val = nodes[tree_val].left;
        console.log('step1',tree_val)
    }
    // console.log(nodes[tree_val].left)
    // console.log(nodes[tree_val].value)
    if (nodes[tree_val].left){
        dict[Object.keys(dict)[idx]].push(nodes[tree_val].left)
        tree_val = nodes[tree_val].left;
        console.log('step1a',tree_val)
    }
    if (nodes[tree_val].left==undefined){
        console.log('step2',tree_val)
        if (nodes[tree_val].right==undefined){
            // leaf nodes // backtrack
            console.log('step3',tree_val)
            tree_val = Object.values(dict)[0][Object.values(dict)[0].length-2]  // last indx
            console.log('last idx',tree_val)
            idx = idx + 1;
            if (nodes[tree_val].right) {
                console.log('step4',tree_val)
                console.log('nodes[tree_val].right',nodes[tree_val].right)
                const b = []
                console.log('Object.values(dict)[idx-1]',Object.values(dict)[idx-1])
                const a = Object.values(dict)[idx-1];
                a.map((x1)=>{
                    if (x1!==a[a.length-1]){
                        b.push(x1)
                    }
                })
                dict[idx] = b; 
                dict[Object.keys(dict)[idx]].push(nodes[tree_val].right)
                tree_val  = nodes[tree_val].right;
            }
            // backtack 2 steps up
            if (nodes[tree_val].left==undefined){
                console.log('step2',tree_val)
                if (nodes[tree_val].right==undefined){
                    // leaf nodes // backtrack
                    console.log('step3',tree_val)
                    tree_val = Object.values(dict)[0][Object.values(dict)[0].length-3]  // last 2nd indx if right node is empty
                    console.log('last idx',tree_val)
                    idx = idx + 1;
                    if (nodes[tree_val].right) {
                        console.log('step4',tree_val)
                        console.log('nodes[tree_val].right',nodes[tree_val].right)
                        const b = []
                        console.log('Object.values(dict)[idx-1]',Object.values(dict)[idx-1])
                        const a = Object.values(dict)[idx-1];
                        a.map((x1)=>{
                            if ((x1!==a[a.length-1]) && (x1!==a[a.length-2])){
                                b.push(x1)
                            }
                        })
                        dict[idx] = b; 
                        dict[Object.keys(dict)[idx]].push(nodes[tree_val].right)
                        tree_val  = nodes[tree_val].right;
                    }
                }
            }
        }
    }
    console.log('dict',dict)
}
branchSums2(nodes)
