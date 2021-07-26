const nodes= {
    5:{left:3,right:7,value:5},
    3:{left:1,right:4,value:3},
    7:{left:6,right:9,value:7},
    9:{left:2,right:11,value:9},
    6:{left:null,right:null,value:6}
};
const totalSum= 0;
const tree_val = nodes[5].value;
// const sum = [];
const dict ={};
idx = 0;
const root=5;
function findClosestValueInBstHelper(root,tree_val){
        idx = 0;
        sum = [];
        sum.push(nodes[root].value)
        tree_val = nodes[root].value;
        itereate(tree_val,sum)
            function itereate(tree_val,sum){
                if (tree_val!==null) {
                    if (nodes[tree_val].left) {
                        if (idx==0) {0
                            sum.push(nodes[tree_val].left);
                            dict[idx] = sum;
                            idx = idx + 1;
                            return {tree_val,sum};
                        } else {
                            if (dict.idx !== dict.idx-1) {
                                sum.push(nodes[tree_val].right);
                                dict[idx] = sum;
                                idx = idx + 1;
                                return {tree_val,sum};                           
                            } else if (dict.idx == dict.idx-1) {
                                console.log('sum.length',sum.length)
                                last_indxVal = sum[sum.length-1]   //getting the last indx of branch array
                                // tree_val = nodes[last_indxVal].value;
                                tree_val = nodes[last_indxVal].right;
                                sum.push(tree_val);
                                dict[idx] = sum;
                                idx = idx + 1;
                                return {tree_val,sum};   
                            }
                        }
                    } else if (!nodes[tree_val].left) {
                        if (idx==0) {
                            sum.push(nodes[tree_val].right);
                            dict[idx] = sum;
                            idx = idx + 1;
                            return {tree_val,sum};
                        } else {
                            if (dict.idx !== dict.idx-1) {
                                sum.push(nodes[tree_val].right);
                                idx = idx + 1;
                                return {tree_val,sum};                           
                            } else if (dict.idx == dict.idx-1) {
                                console.log('sum.length',sum.length)
                                last_indxVal = sum[sum.length-1]   //getting the last indx of branch array
                                tree_val = nodes[last_indxVal].value;
                                sum.push(nodes[tree_val].right);
                                dict[idx] = sum;
                                idx = idx + 1;
                                return {tree_val,sum};    
                            }
                        }
                        return {tree_val,sum};
                    } else if (!nodes[tree_val].right) {
                        console.log('sum.length',sum.length)
                        last_indxVal = sum[sum.length-1]   //getting the last indx of branch array
                        tree_val = nodes[last_indxVal].value;
                        // sum.pop();
                        // sum.push(nodes[tree_val].right);
                        return itereate(tree_val,sum);
                    }
                } 
                // else if (tree_val===null) {
                //     if (idx==0) {
                //      dict[idx] = sum; 
                //      idx = idx + 1;
                //      } else if (idx!==0) {
                //          if (dict[idx] !== dict[idx-1]) { 
                //              dict[idx] = sum; 
                //              idx = idx + 1;
                //          } else if (dict[idx] == dict[idx-1]) {
                //              tree_val = nodes[tree_val].right;
                //              tree_val = sum[sum.length-1]
                //              tree_val = nodes[tree_val].value;
                //              sum.pop();
                //              sum.push(nodes[tree_val].right);
                //              return itereate(tree_val,sum)
                //          }
                //      }
                // }

            }

            console.log(dict,idx)
    }
findClosestValueInBstHelper(5,tree_val)

// 100: {left:5,right:502,value:100},
// 502: {left:204,right:55000,value:502},
// 55000:{left:1001,right:null,value:55000},
// 1001:{left:null,right:4500,value:1001},
// 4500:{left:null,right:null,value:4500},
// 204:{left:203,right:205,value:204},
// 205:{left:null,right:207,value:205},
// 207:{left:206,right:208,value:207},
