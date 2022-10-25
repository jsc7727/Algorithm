function solution(n, queries) {
  var answer = [];
  const dict = {};
  const used = new Array(n + 1).fill(false);
  const visited = new Array(n + 1).fill(false);
  let allUsed = false;
  const getNewIp = () => {
    if (allUsed === true) {
      for (let i = 1; i <= n; i++) {
        // 한번씩
        if (used[i] === false) {
          used[i] = true;
          return [true, i];
        }
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (i === n) allUsed = true;
        if (visited[i] === false) {
          used[i] = true;
          visited[i] = true;
          return [true, i];
        }
      }
    }
    return [false, -1];
  };
  for (let query of queries) {
    const test = () => {
      const [result, newIp] = getNewIp();
      // ip 발급 가능할 때
      if (result === true) {
        dict[name] = newIp;
        answer.push(`${name} 192.168.0.${newIp}`);
      }
      // ip 발급 불가능 할 때
      else {
        answer.push(`${name} reject`);
      }
    };
    const [name, command] = query.split(" ");
    if (command === "request") {
      // 처음 요청이 아닐때
      if (dict.hasOwnProperty(name)) {
        if (used[dict[name]] === true) {
          // 사용중 O
          test();
        } else {
          // 사용중 X
          used[dict[name]] = true;
          answer.push(`${name} 192.168.0.${dict[name]}`);
        }
      }
      // 처음 요청일 때
      else {
        test();
      }
    }
    if (command === "release") {
      if (dict.hasOwnProperty(name)) used[dict[name]] = false;
    }
    // console.log(name, command);
    // console.log(dict);
    // console.log(used);
    // console.log(visited);
  }
  // console.log(answer);
  return answer;
}
