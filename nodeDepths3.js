class BinaryTree {
    constructor(val) {
      this.value = val.value;
      this.left = val.left;
      this.right = val.right;
    }
}
let leafNodes = [];
let x1 = 0;
let x2 = 0;
function nodeDepths(root,depth,str) {
    if (str=='left') {
        x1 = x1 + 1;
        console.log(`---Pending Rightleaf iter`, x1);
    };
    const root_val = new BinaryTree(dict.tree.nodes[root-1]);
    if (root_val.value==1) {let depth = 0};
    if (root_val.value!==1) {depth = depth + 1};
    leafNodes.push(depth);
    // console.log('------------------------leafNodes',leafNodes)
    if ((root_val.left===null) && (root_val.right===null)) {
        return;  //End Current Iteration
    };
    nodeDepths(root_val.left,depth,'left') 
    nodeDepths(root_val.right,depth,'right');
    x2 = x2 + 1;
    console.log(`------Start Rightleaf iter`, x2)
    return leafNodes.reduce((a, b) => a + b, 0);  //End Current Iteration
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
const root = dict.tree.root;
str = 'init'
const x = nodeDepths(root,0,str);
console.log('x',x)

  