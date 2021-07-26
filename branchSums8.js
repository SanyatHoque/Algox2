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
class Node {
    constructor(val) {
        this.left = val.left;
        this.right = val.right;
        this.value = val.value;
    }
}
function branchSums(root) {
  console.log('BRANCHSUMS');
    const sums = [];
    // const x = 0;
    calculateBranchSums(root,0,sums);
    console.log('Sums',sums);
}
function calculateBranchSums(val,runningSum,sums,str){
  if (!str) {str='initial Iteration'};
  console.log(`
  `)
  if (str=='-- left Node') {
    // x = 0;
    console.log(`Skipping RIGHT BRANCH`);
  };
  if (str=='-- right Node') {
    // x = x + 1;
    console.log(`Doing RIGHT BRANCH --> `);
  };
  console.log('1.CALCULATEBRACHSUMS ',str, '-->',val);
    if(!val){return console.log('----VAL IS NULL END CURRENT Iteration',val)}  // return --> stops loop
  const node = new Node(dict.tree.nodes[val-1]);   // since objects are wrapped in an array, idx is always arr[idx-1]
  console.log('  Current leaf node --> ',node)
  const newRunningSum = runningSum + node.value;

    if (!node.left && !node.right) {
      console.log('2.----left && right IS NULL',node.left)
        sums.push(newRunningSum);
        return console.log('----------------END CURRENT Iteration');
    }
    console.log('2. ----CHECK node left',node.left)
    console.log('3. ----CHECK node right',node.right)

    calculateBranchSums(node.left,newRunningSum,sums,'-- left Node');
    calculateBranchSums(node.right,newRunningSum,sums, '-- right Node');

}
const root = 1;
branchSums(dict.tree.root)