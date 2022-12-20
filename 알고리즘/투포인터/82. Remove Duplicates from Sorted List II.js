function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const arr = [1, 2, 3, 3, 4, 4, 5];
let head = null;
let firstHead = null;
for (let i of arr) {
  const newNode = new ListNode(i);
  if (head === null) {
    head = newNode;
    firstHead = head;
  } else {
    head.next = newNode;
    head = newNode;
  }
}
head.next = null;

// console.log(firstHead);

var deleteDuplicates = function (head) {
  let num = -101;
  let count = 0;
  let newHead = new ListNode(-101);
  let answerHead = newHead;
  while (head !== null) {
    if (head.val === num) {
      count++;
    } else {
      if (count === 1) {
        newHead.next = new ListNode(num);
        newHead = newHead.next;
      }
      num = head.val;
      count = 1;
    }
    head = head.next;
  }
  if (count === 1) {
    newHead.next = new ListNode(num);
    newHead = newHead.next;
  }
  return answerHead.next;
};
const res = deleteDuplicates(firstHead);
console.log(res);

// const deleteDuplicates = function(head) {
//     if(head === null || head.next === null) return head;

//     const dummy = new ListNode(0);
//     dummy.next = head;
//     head = dummy;

//     while(head.next !== null && head.next.next !== null) {
//         if(head.next.val === head.next.next.val) {
//             let val = head.next.val;
//             while( head.next !== null && head.next.val === val ){
//                 head.next = head.next.next;
//             }
//         } else {
//             head = head.next;
//         }
// 	}
// 	return dummy.next
// }
