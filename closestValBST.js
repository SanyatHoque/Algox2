const nodes= {
    100:{left:5,right:502,value:100},
    502:{left:204,right:55000,value:502},
    55000:{left:1001,right:null,value:55000},
    1001:{left:null,right:4500,value:1001},
    4500:{left:null,right:null,value:4500},
    204:{left:203,right:205,value:204},
    205:{left:null,right:207,value:205},
    207:{left:206,right:208,value:207}
};

function findClosestValueInBstHelper(tree_val,target,closest){
    // console.log('1.     tree_val',tree_val);
            if (tree_val==null) {
                return console.log('closestNull1',closest);
            }
            if (Math.abs(target-closest) > Math.abs(target-tree_val)){
                closest = tree_val;
                console.log('closest0',closest);
            }
            if (target < tree_val) {
                // idx = idx + 1;
                // console.log('tree_val',tree_val)
                if (nodes[tree_val]==undefined) {
                    return console.log('closestNull2',closest);
                }
                console.log('nodes[tree_val].left ==>',nodes[tree_val].left,'tree_val ==>',tree_val);
                return findClosestValueInBstHelper(nodes[tree_val].left,target,closest);
            } else if (target > tree_val) {
                // idx = idx + 1;
                // console.log('tree_val',tree_val)
                // console.log('2.         tree_val',tree_val);
                // console.log('3.         nodes[tree_val].right ---> ',nodes[tree_val].right);
                if (nodes[tree_val]==undefined) {
                    return console.log('closestNull3',closest);
                }
                console.log('nodes[tree_val].right ==>',nodes[tree_val].right,'tree_val ==>',tree_val);
                return findClosestValueInBstHelper(nodes[tree_val].right,target,closest);
            } else if (target == tree_val)  {
                // idx = idx + 1;
                return console.log('closest, target === tree_val',closest);
            }
    }
const target= 221;
const tree_val = nodes[100].value;
const closest = nodes[100].value;
findClosestValueInBstHelper(tree_val,target,closest)

// 100: {left:5,right:502,value:100},
// 502: {left:204,right:55000,value:502},
// 55000:{left:1001,right:null,value:55000},
// 1001:{left:null,right:4500,value:1001},
// 4500:{left:null,right:null,value:4500},
// 204:{left:203,right:205,value:204},
// 205:{left:null,right:207,value:205},
// 207:{left:206,right:208,value:207},