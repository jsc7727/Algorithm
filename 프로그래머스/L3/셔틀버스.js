function solution(n, t, m, timetable) {
  const timeToMin = (time) => {
    const [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
  };
  const minToTime = (min) => {
    const hour = (min / 60) >> 0;
    min = min % 60;
    return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
  };

  const dict = {};
  for (let time of timetable) {
    const second = timeToMin(time);
    if (dict.hasOwnProperty(second)) {
      dict[second]++;
    } else {
      dict[second] = 1;
    }
  }
  const sortedDict = Object.entries(dict).sort((a, b) => a[0] - b[0]);
  console.log(sortedDict);
  const check = () => {
    let suttleMin = timeToMin("09:00");
    let idx = 0;
    for (let i = 0; i < n; i++) {
      let count = m;
      for (; idx < sortedDict.length; idx++) {
        console.log(suttleMin, idx);
        if (suttleMin > +sortedDict[idx][0]) {
          count -= sortedDict[idx][1];
          if (count < 0) {
            console.log(sortedDict[idx][1], count);
            sortedDict[idx][1] = -count;
            idx--;
            break;
          }
        } else {
          break;
        }
      }
      suttleMin += t;
    }
    return suttleMin;
  };
  console.log(check());
  return;
}

solution(2, 10, 2, ["09:10", "09:09", "08:00"]); //	"09:09"
solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]); //	"08:59"
