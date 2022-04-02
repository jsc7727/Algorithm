let bfs = function (node) {
    let nodeList = [node];
    const result = [];
    while (nodeList.length > 0) {
        const n = nodeList.splice(0, 1)[0];
        result.push(n.value);
        n.children.forEach((v) => nodeList.push(v));
    }
    return result;
};

let Node = function (value) {
    this.value = value;
    this.children = [];
};

Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
};
