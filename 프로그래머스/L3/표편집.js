function solution(n, k, cmd) {
  const stack = [];
  class node {
    constructor(idx) {
      this.idx = idx;
      this.prev = null;
      this.next = null;
    }
    addNode(idx) {
      const newNode = new node(idx);
      this.next = newNode;
      newNode.prev = this;
      return newNode;
    }
    deleteNode() {
      stack.push(this);
      if (this.prev) this.prev.next = this.next;
      if (this.next) this.next.prev = this.prev;
      return this.next ? this.next : this.prev;
    }
    recoverNode() {
      if (this.prev) this.prev.next = this;
      if (this.next) this.next.prev = this;
    }
  }
  let newNode = new node(0);
  let startNode = newNode;
  let nowNode = null;
  for (let i = 1; i < n; i++) {
    newNode = newNode.addNode(i);
    if (k === i) nowNode = newNode;
  }
  for (let command of cmd) {
    const [type, num] = command.split(" ");
    if (type === "D") {
      for (let i = 0; i < num; i++) {
        if (nowNode.next === null) break;
        nowNode = nowNode.next;
      }
    }
    if (type === "U") {
      for (let i = 0; i < num; i++) {
        if (nowNode.prev === null) break;
        nowNode = nowNode.prev;
      }
    }
    if (type === "C") {
      nowNode = nowNode.deleteNode();
    }
    if (type === "Z") {
      const temp = stack.pop();
      temp.recoverNode();
    }
    console.log("now", nowNode.idx);
  }
  const arr = new Array(n).fill("O");
  for (let node of stack) {
    arr[node.idx] = "X";
  }
  while (startNode !== null) {
    console.log(startNode.idx);
    startNode = startNode.next;
  }
  console.log(nowNode.idx);
  return arr.join("");
}

const res = solution(4, 1, ["C", "C", "Z", "U 1", "Z", "C"]);
console.log(res);
