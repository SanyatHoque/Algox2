dict = {
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": "10", "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "10", "left": null, "right": null, "value": 10}
      ],
      "root": "1"
    }
  }
// const root = dict.tree.nodes[0];
// console.log('root',root)
class Node {
    constructor(val) {
        this.left = val.left;
        this.right = val.right;
        this.value = val.value;
    }
}
// console.log(dict.tree.nodes[0])
// console.log(dict.tree.nodes[0].value)
// const node = new Node(dict.tree.nodes[0])
// console.log('node',node)
// console.log('node',node.value)
// console.log('node',node.left)
function branchSums(root) {
  console.log('BRANCHSUMS');
    // const node = new Node(dict.tree.nodes[root-1])
    // console.log('node',node);
    const sums = [];
    calculateBranchSums(root,0,sums);
    return console.log('Sums',sums);
}
function calculateBranchSums(val,runningSum,sums){
  console.log('CALCULATEBRACHSUMS',val);
    if(!val){return console.log('VAL IS NULL',val)}
  const node = new Node(dict.tree.nodes[val-1])
  console.log('node beginnning',node)
    if(!node.value) {
      console.log('node.value is NULL',node.value)
      return console.log('*****************SKIP LOOP')};
    const newRunningSum = runningSum + node.value;
    console.log('newRunningSum',newRunningSum)
    if (!node.left && !node.right) {
      console.log('CHECK IF node.left IS NULL',node.left)
      console.log('CHECK IF node.right IS NULL',node.right)
        sums.push(newRunningSum);
        return console.log('SKIP LOOP LEFT/RIGHT');
    }
    console.log('node End left',node.left)
    console.log('node End right',node.right)
    calculateBranchSums(node.left,newRunningSum,sums);
    calculateBranchSums(node.right,newRunningSum,sums);
}
const root = 1;
branchSums(root)