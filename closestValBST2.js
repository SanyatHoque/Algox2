function findClosestValueInBstHelper(tree_val,target,closest){
    if (tree_val===null) {
        return console.log('closestNull1',closest);
    }
    if (Math.abs(target-closest) > Math.abs(target-tree_val)){
        closest = tree_val;
        console.log('closest0',closest);
    }
    if (target < tree_val) {
        if (nodes[tree_val]==undefined) {
            return console.log('closestNull2',closest);
        }
        console.log('nodes[tree_val].left ==>',nodes[tree_val].left,'tree_val ==>',tree_val);
        return findClosestValueInBstHelper(nodes[tree_val].left,target,closest);
    } else if (target > tree_val) {
        if (nodes[tree_val]==undefined) {
            return console.log('closestNull3',closest);
        }
        console.log('nodes[tree_val].right ==>',nodes[tree_val].right,'tree_val ==>',tree_val);
        return findClosestValueInBstHelper(nodes[tree_val].right,target,closest);
    } else if (target === tree_val)  {
        // idx = idx + 1;
        return console.log('closest, target === tree_val',closest);
    }
}
const dict = 
{
"tree": {
  "nodes": [
    {"id": "100", "left": "5", "right": "502", "value": 100},
    {"id": "502", "left": "204", "right": "55000", "value": 502},
    {"id": "55000", "left": "1001", "right": null, "value": 55000},
    {"id": "1001", "left": null, "right": "4500", "value": 1001},
    {"id": "4500", "left": null, "right": null, "value": 4500},
    {"id": "204", "left": "203", "right": "205", "value": 204},
    {"id": "205", "left": null, "right": "207", "value": 205},
    {"id": "207", "left": "206", "right": "208", "value": 207},
    {"id": "208", "left": null, "right": null, "value": 208},
    {"id": "206", "left": null, "right": null, "value": 206},
    {"id": "203", "left": null, "right": null, "value": 203},
    {"id": "5", "left": "2", "right": "15", "value": 5},
    {"id": "15", "left": "5-2", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": "57", "value": 22},
    {"id": "57", "left": null, "right": "60", "value": 57},
    {"id": "60", "left": null, "right": null, "value": 60},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": "3", "value": 2},
    {"id": "3", "left": null, "right": null, "value": 3},
    {"id": "1", "left": "-51", "right": "1-2", "value": 1},
    {"id": "1-2", "left": null, "right": "1-3", "value": 1},
    {"id": "1-3", "left": null, "right": "1-4", "value": 1},
    {"id": "1-4", "left": null, "right": "1-5", "value": 1},
    {"id": "1-5", "left": null, "right": null, "value": 1},
    {"id": "-51", "left": "-403", "right": null, "value": -51},
    {"id": "-403", "left": null, "right": null, "value": -403}
  ],
  "root": "100"
},
"target": 209
};
let nodes = {};
dict.tree.nodes.map(x1 => {
    nodes[x1.value] = x1;
})
console.log(`////////////////////////////////////////`);
console.log('nodes',nodes);
console.log('eachNode',nodes[1]);
console.log('eachNode',nodes[2]);
console.log(`////////////////////////////////////////`);
// class Node {
//     constructor(val) {
//         this.left = val.left;
//         this.right = val.right;
//         this.value = val.value;
//     }
// }
// const node = new Node(dict.tree.nodes[0]);
// console.log('node',node);

const target= dict.target;
const tree_val = dict.tree.nodes[0].value;
const closest = dict.tree.nodes[0].value;
console.log(`tree_val --> ${tree_val}
closest --> ${closest}
target --> ${target}`)
findClosestValueInBstHelper(tree_val,target,closest)