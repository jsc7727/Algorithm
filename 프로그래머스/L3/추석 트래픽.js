function solution(lines) {
  var answer = 0;
  let list = lines.map((v) => {
    let result = v.split(" ").map((k, index) => {
      if (index === 0) return k.split("-");
      else if (index === 1) {
        let CMSData = k.split(":");
        CMSData = CMSData.concat(CMSData.pop().split("."));
        return CMSData;
      } else return k;
    });
    let timeArray = result[0].concat(result[1]);
    let date = new Date(...timeArray);
    return [date.getTime() - parseFloat(result[2]) * 1000 + 1, date.getTime()];
  });
  list.map((v) => {
    let result = 0;
    let start1 = v[0];
    let end1 = v[0] + 1000;
    let start2 = v[1];
    let end2 = v[1] + 1000;
    list.map((k) => {
      if (start1 < k[1] && end1 >= k[0]) {
        result++;
      }
    });
    answer = Math.max(answer, result);
    result = 0;
    list.map((k) => {
      if (start1 < k[1] && end1 >= k[0]) {
        result++;
      }
    });
    answer = Math.max(answer, result);
  });
  return answer;
}
