// INCOMPLETE

const name = {
    "graph": {
      "nodes": [
        {"children": ["B", "C", "D"], "id": "A", "value": "A"},
        {"children": ["E", "F"], "id": "B", "value": "B"},
        {"children": [], "id": "C", "value": "C"},
        {"children": ["G", "H"], "id": "D", "value": "D"},
        {"children": [], "id": "E", "value": "E"},
        {"children": ["I", "J"], "id": "F", "value": "F"},
        {"children": ["K"], "id": "G", "value": "G"},
        {"children": [], "id": "H", "value": "H"},
        {"children": [], "id": "I", "value": "I"},
        {"children": [], "id": "J", "value": "J"},
        {"children": [], "id": "K", "value": "K"}
      ],
      "startNode": "A"
    }
  }
class Node {
  constructor(name) {
    this.value = name.value;
    this.children = name.children;
    // console.log('this.value  ==> ',this.value);
    // console.log('this.children  ==> ',this.children);
  }
};

const node = new Node(name.graph.nodes[0]);
console.log('node ===> ',node);
console.log(`node.value ===> ${node.value}
node.children ===> ${node.children}`);

function depthFirstSearch(x) {
  for (const child of x) {
    depthFirstSearch(x);
  }
  return ;
}

depthFirstSearch(node.children);
