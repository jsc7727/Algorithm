function solution(user_id, banned_id) {
  var answer = 0;
  let list = [];
  banned_id.map((k, kindex) => {
    let li = [];
    user_id.map((v, vindex) => {
      for (let i = 0; i <= v.length - k.length; i++) {
        let id = v.slice(i, i + k.length);
        let result = v.split("").every((_, index) => {
          return k[index] === "*" || _ === k[index];
        });
        if (result) li.push(v);
      }
    });
    if (li.length !== 0) list.push(li);
  });
  let result = recursive([], list, []);
  return result.length;
}

const recursive = (preList, list, result) => {
  if (list.length === 0) {
    let check = result.every((v, index) => {
      return (
        true !==
        preList.every((k, kindex) => {
          return v.includes(k);
        })
      );
    });
    check && result.push(preList);
    return;
  }
  list[0].map((v, index) => {
    let cp = [...list].slice(1).map((k) => k.filter((j) => j !== v));
    recursive(preList.concat([v]), cp, result);
  });
  return result;
};

// ------------------------------------------------------------------------

const checkWord = (a, b) =>
  new RegExp("^" + b.split("*").join(".") + "$").test(a);

function solution(user_id, banned_id) {
  let temp = {};

  const compare = (users, ban, depth) => {
    if (depth < banned_id.length)
      users.forEach((user, i) => {
        if (checkWord(user, ban[0])) {
          const userCopy = users.slice();
          const banCopy = ban.slice();
          userCopy.splice(i, 1);
          banCopy.splice(0, 1);
          compare(userCopy, banCopy, depth + 1);
        }
      });
    else temp[users] = true;
  };

  compare(user_id, banned_id, 0);

  return Object.keys(temp).length;
}
