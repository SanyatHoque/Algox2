class BinaryTree {
    constructor(val) {
      this.value = val.value;
      this.left = val.left;
      this.right = val.right;
    }
}
function nodeDepths(root,depth,totalSum,string) {
    const root_val = new BinaryTree(dict.tree.nodes[root-1]);
    if (root_val.value==1) {
      depth = 0
    } else if (root.value!==1) {
      depth = depth + 1;
    } 
    totalSum = totalSum + depth;
    total.push(totalSum);
    console.log(total)
    if ((root_val.left===null) && (root_val.right===null)) {
        return totalSum;
    };
    // console.log('root_val',root_val,'depth',depth,'string',string,'totalSum',totalSum)
    nodeDepths(root_val.left,depth,totalSum,'left') 
    // console.log('###root_val',root_val,'depth',depth,'string',string,'totalSum',total[total.length-1])
    nodeDepths(root_val.right,depth,total[total.length-1],'right');
    return total[total.length-1]
}
dict = {
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": null, "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9}
      ],
      "root": "1"
   }
}
const root = 1;
string = 'none'
const depth = 0
var totalSum = 0;
total = [];
console.log(nodeDepths(root,depth,totalSum,'none'));


  
