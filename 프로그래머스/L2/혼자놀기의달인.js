// https://school.programmers.co.kr/learn/courses/30/lessons/131130
function solution(cards) {
    var answer = [];
    const visited = new Array(101).fill(false);
    const dfs = (idx) => {
        if(visited[idx] === false){
            visited[idx] = true;
            return dfs(cards[idx]-1) + 1;
        }
        return 0;
    }

    for(let idx = 0 ; idx < cards.length; idx++){
        answer.push(dfs(idx));
    }
    answer.sort((a,b)=>b-a);
    return answer[0]*answer[1];
}