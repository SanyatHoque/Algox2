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
var idx1 = 0;
var idx2 = 0;
class Node {
    constructor(val) {
        this.left = val.left;
        this.right = val.right;
        this.value = val.value;
    }
}
function branchSums(root) {
    const sums = [];
    calculateBranchSums(root,0,sums,'none');
    console.log('BRANCHSUMS')
    return console.log('Sums',sums);
}
function calculateBranchSums(val,runningSum,sums,string){
  console.log('CALCULATEBRACHSUMS',val,'string', string);
  if (string=='left') {
    console.log('idx1==>',idx1,'val==>',val)
    idx1++;
  } else if (string=='right') {
    console.log('idx2==>',idx2,'val==>',val)
    idx2++;
  }
        if(!val){
            return console.log('VAL IS NULL',val)
        }
  const node = new Node(dict.tree.nodes[val-1])
  console.log(node)
  const newRunningSum = runningSum + node.value;
        if (!node.left && !node.right) {
            sums.push(newRunningSum);
            return console.log('**************************SKIP LOOP ==>',string,'===> node val ',node.value);
        }
  console.log('###########BEFORE RETURN VAL')
  calculateBranchSums(node.left,newRunningSum,sums,'left');
  calculateBranchSums(node.right,newRunningSum,sums,'right');
}
branchSums(dict.tree.nodes[0].value)