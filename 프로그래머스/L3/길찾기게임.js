function solution(nodeinfo) {
  var answer = [[]];

  class tree {
    constructor(value, xp) {
      this.value = value;
      this.xp = xp;
      this.left = null;
      this.right = null;
    }
    insert(value, xp) {
      if (this.xp < xp) {
        if (this.right === null) this.right = new tree(value, xp);
        else this.right.insert(value, xp);
      } else {
        if (this.left === null) this.left = new tree(value, xp);
        else this.left.insert(value, xp);
      }
    }
    preOrder() {
      let temp = [];
      temp.push(this.value);
      this.left && temp.push(...this.left.preOrder());
      this.right && temp.push(...this.right.preOrder());
      return temp;
    }
    postOrder() {
      let temp = [];
      this.left && temp.push(...this.left.postOrder());
      this.right && temp.push(...this.right.postOrder());
      temp.push(this.value);
      return temp;
    }
  }

  const arr = nodeinfo
    .map((v, idx) => [...v, idx + 1])
    .sort((a, b) => b[1] - a[1]);
  const bt = new tree(arr[0][2], arr[0][0]);
  for (let i = 1; i < arr.length; i++) {
    const [x, y, idx] = arr[i];
    bt.insert(idx, x);
  }

  return [bt.preOrder(), bt.postOrder()];
}
