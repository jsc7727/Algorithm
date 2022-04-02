const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const n = +input();
console.log(n)

const Node = function (value) {
    this.value = value;
    this.childNodes = [];
}

Node.prototype.addchildNode = function (childNode) {
    this.childNodes.push(childNode);
    return childNode;
}

const checkNodes = {};
for (let i = 0; i < n; i++) {
    const [value, ...addNodes] = input().trim().split(' ');
    const addChildNodes = ({ parentNode }) => {
        for (let i of addNodes) {
            const newNode = new Node(i);
            parentNode.addchildNode(newNode);
            checkNodes[i] = newNode;
        }
    }
    if (checkNodes[value]) {
        const parentNode = checkNodes[value];
        addChildNodes({ parentNode })
    }
    else {
        const parentNode = new Node(value);
        addChildNodes({ parentNode })
        checkNodes[value] = parentNode;
    }
}

console.log(checkNodes['A'].childNodes[0])
// 전위 순회
const preOrder = (node) => {
    console.log(node.value)
    if (node.childNodes.length === 2) {
        for (let i of node.childNodes) {
            if (i.value !== '.') {
                preOrder(i)
            }
        }
    }
}

// 중위 순회
const inOrder = () => {

}

// 후위 순회
const postOrder = (node) => {
    if (node.childNodes.length === 2) {
        for (let i of node.childNodes) {
            if (i.value !== '.') {
                preOrder(i)
            }
        }
    }
    console.log(node.value)
}

preOrder(checkNodes['A']);
console.log()
postOrder(checkNodes['A']);
